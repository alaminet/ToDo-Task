const nodemailer = require("nodemailer");

async function OTPEmail(email, otp, token, template) {
  const tokenlink = `${process.env.HTTPS}linkverification/${token}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "addme4et@gmail.com",
      pass: "nbcpbgotfbzjjarw",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"ToDo-Task"`, // sender address
    to: email, // list of receivers
    subject: "OTP Verification: ToDo-Task", // Subject line
    html: template(otp, tokenlink), // html body
  });

  console.log("OTP sent");
}

module.exports = OTPEmail;
