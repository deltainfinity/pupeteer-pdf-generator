const puppeteer = require('puppeteer')
const fs = require('fs')

const saveToPdf = async () => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({

    // devtools: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // SEE BELOW WARNING!!!
  })
  const page = await browser.newPage()

  await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js' })
  await injectFile(page, require.resolve('../js/report.min.js'))

  var html = `
  <html>
  <body>
   
  <report-header report-Name="assessment" user-Data='{ "SubjectLastName": "dude", "SubjectFirstName": "the" }'></report-header>
  <report-demographics  user-Data='{ "SubjectExternalID": 123, "SORID": "345", "BirthDate":"02/14/1990", "UserLastName": "dude", "UserFirstName": "the" }'></report-demographics>
 
  <report-domain-header domain-Header-Name="domain 1">
    <report-section-header section-Header-Name="section 1"></report-section-header>
    <report-question-with-single-answers data='{"QuestionSequence":1,"QuestionText":"Question 1", "Answers":[{"AnswerValue":"Answer 1","AnswerImageType":3}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":2,"QuestionText":"Question 2", "Answers":[{"AnswerValue":"Answer 2","AnswerImageType":4}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":3,"QuestionText":"Question 3", "Answers":[{"AnswerValue":"Answer 3","AnswerImageType":5}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":4,"QuestionText":"Question 4", "Answers":[{"AnswerValue":"Answer 4","AnswerImageType":6}]}'></report-question-with-single-answers>
    <report-section-header section-Header-Name="section 2"></report-section-header>
    <report-question-with-single-answers data='{"QuestionSequence":1,"QuestionText":"Question 1", "Answers":[{"AnswerValue":"Answer 1","AnswerImageType":3}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":2,"QuestionText":"Question 2", "Answers":[{"AnswerValue":"Answer 2","AnswerImageType":4}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":3,"QuestionText":"Question 3", "Answers":[{"AnswerValue":"Answer 3","AnswerImageType":5}]}'></report-question-with-single-answers>
    <report-question-with-single-answers data='{"QuestionSequence":4,"QuestionText":"Question 4", "Answers":[{"AnswerValue":"Answer 4","AnswerImageType":6}]}'></report-question-with-single-answers>
    
  </report-domain-header>

  <report-domain-header domain-Header-Name="domain 2">
  <report-section-header section-Header-Name="section 1"></report-section-header>
  <report-question-with-single-answers data='{"QuestionSequence":1,"QuestionText":"Question 1", "Answers":[{"AnswerValue":"Answer 1","AnswerImageType":3}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":2,"QuestionText":"Question 2", "Answers":[{"AnswerValue":"Answer 2","AnswerImageType":4}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":3,"QuestionText":"Question 3", "Answers":[{"AnswerValue":"Answer 3","AnswerImageType":5}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":4,"QuestionText":"Question 4", "Answers":[{"AnswerValue":"Answer 4","AnswerImageType":6}]}'></report-question-with-single-answers>
  
  <report-section-header section-Header-Name="section 2"></report-section-header>
  <report-question-with-single-answers data='{"QuestionSequence":1,"QuestionText":"Question 1", "Answers":[{"AnswerValue":"Answer 1","AnswerImageType":3}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":2,"QuestionText":"Question 2", "Answers":[{"AnswerValue":"Answer 2","AnswerImageType":4}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":3,"QuestionText":"Question 3", "Answers":[{"AnswerValue":"Answer 3","AnswerImageType":5}]}'></report-question-with-single-answers>
  <report-question-with-single-answers data='{"QuestionSequence":4,"QuestionText":"Question 4", "Answers":[{"AnswerValue":"Answer 4","AnswerImageType":6}]}'></report-question-with-single-answers>
  
  </report-domain-header>

  <report-footer></report-footer>
 
  </body>
  </html>`
  await page.setContent(html)

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
