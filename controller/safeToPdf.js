const puppeteer = require('puppeteer')
const fs = require('fs')

const saveToPdf = async (json) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({

    // devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // SEE BELOW WARNING!!!
  })
  const page = await browser.newPage()

  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js' })

  // await injectFile(page, require.resolve('../js/assessment-components.min.js'))
  await injectFile(page, require.resolve('../js/report.min.js'))

  var headerTemplate = "<report-header reportName='CSE-IT' data ='" + JSON.stringify(json) + "/>";
  var footerTemplate = " <report-footer/>";
  var html1 = `<html>
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <body>
  
    <report-c-s-e-i-t name = 'CSE-IT' data ='`
  var html2 = `'/></body></html>`

  var data = html1 + JSON.stringify(json) + html2;
  await page.setContent(data);
  await page.addStyleTag({ url: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' })
  await page.addStyleTag({ url: 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css' })
  await page.addStyleTag({ url: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' })

  function test() {
    return '<report-footer></report-footer>';
  }
  const pdf = await page.pdf({
    format: 'A4',
    headerTemplate: test(),
    // footerTemplate: '<span style="font-size: 10px; width: 5px; height: 5px; background-color: red; color:black; margin: 20px;">Footer</span>',
    displayHeaderFooter: true,
    printBackground: true,
    ///padding: { top: 40, bottom: 40 }
  });

  await browser.close()
  return pdf

}

/** ****************** WARNING ********************* WARNING ********************* WARNING *********************

 If you absolutely trust the content you open in Chrome, you can launch Chrome with the --no-sandbox argument...
 Running without a sandbox is strongly discouraged. Consider configuring a sandbox instead!!!

 More Info Here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

******************** WARNING ********************* WARNING ********************* WARNING *********************/

async function injectFile(page, filePath) {
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
