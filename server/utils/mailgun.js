const nodeMailer = require("nodemailer");
const adminEmail = "manteam9x@gmail.com";
const adminPassword = "a3580323A";
const mailHost = "smtp.gmail.com";
const mailPort = 587;
const sendEmail = (payload) => {
  const { code, email, username } = payload;
  const subject = "Verify account";
  // Create admin email
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });
  const options = {
    from: adminEmail,
    to: email, // send email to
    subject: subject,
    html: `<pre>
    Hi ${username},

    We just need to verify your email address before you can access.
    
    Verify your email address equal code: <b> ${code} <b>
    
    Thanks! – The MAN team

    </pre> `,
  };

  return transporter.sendMail(options);
};
module.exports = {
  sendEmail: sendEmail,
};
