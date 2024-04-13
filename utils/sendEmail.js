const nodemailer = require("nodemailer");
require("dotenv").config();
// Create a Nodemailer transporter

async function sendMail(email, otp) {
  return new Promise(function (resolve, reject) {
    let htmlPart = `
	<h3>Hi,</h3>
	<p>Welcome to House Fix App</p>
	<p>This is your otp: ${otp}</p>`;

    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILDERUSER,
        pass: process.env.NODEMAILDERPASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.NODEMAILDERUSER,
      to: email,
      subject: "House Fix invitation to forgot password",
      html: htmlPart,
    };
    transporter.sendMail(mailOptions, (err, result) => {
      if (err) {
        console.log("err::: ", err);
        // return err;
        reject(err);
      } else {
        console.log("sendmail result::: ", result);
        // return result;
        resolve(result);
      }
    });
  });
}

module.exports = {
  sendMail,
};
