var api_key = 'MAILGUN-API-KEY'
var domain = 'mg.studytracker.tech'
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})
 
async function sendEmail(payload) {
  const { code, email } = payload
  var data = {
    from: 'Admin <contact@studytracker.tech>',
    to: email,
    subject: `Curricula App Verification Code: ${code}`,
    text: `Enter this code: ${code}`
  }

  await mailgun.messages().send(data).then(() => {
    console.log('message sent')
    console.log(data)
  }).catch((error) => {
    console.log(error)
    // console.log(error.response.body.errors[0].message)
  })
  return true
}

module.exports = { sendEmail }
