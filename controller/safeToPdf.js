const puppeteer = require('puppeteer')
const fs = require('fs')

const saveToPdf = async (json) => {
  console.log("json",json);
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // SEE BELOW WARNING!!!
  })
  const page = await browser.newPage()

  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js' })
  await injectFile(page, require.resolve('../js/assessment-components.min.js'))

  var html = `
  <html>
  <body>
  <report-header report-Name="assessment" :user="{'SubjectLastName':'dude', 'SubjectFirstName':'the'}"></report-header>
  <report-footer></report-footer>
  </body>
  </html>`

  var html1 = `
  <html>
  <body>
    <CSE-IT :reportName = 'CSE-IT' :data ='`
    var html2 = `'></CSE-IT>
    </body>
    </html>`
  var data = html1+JSON.stringify(json) +html2;
  console.log('data: ', data);
  await page.setContent(data)

  const pdf = await page.pdf()
  await browser.close()

  return pdf
}

/** ****************** WARNING ********************* WARNING ********************* WARNING *********************

 If you absolutely trust the content you open in Chrome, you can launch Chrome with the --no-sandbox argument...
 Running without a sandbox is strongly discouraged. Consider configuring a sandbox instead!!!

 More Info Here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

******************** WARNING ********************* WARNING ********************* WARNING *********************/

async function injectFile (page, filePath) {
  let contents = await new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
  contents += '//# sourceURL=' + filePath.replace(/\n/g, '')
  return page.mainFrame().evaluate(contents)
}

module.exports = saveToPdf
