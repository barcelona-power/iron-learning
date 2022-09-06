const nodemailer = require("nodemailer");

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL_MAIL = process.env.EMAIL_MAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_MAIL,
    pass: EMAIL_PASSWORD,
  },
});

module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "Ironman<iron.learning.welcomer@gmail.com>",
      to: user.email,
      subject: "Aprende! comparte! disfruta! crea!",
      html: `
        <h3>Hola ${user.nickname}!</h3>
        ...
        <p>Me alegra tenerte a bordo con nosotros en <b>iron-learning</b></p>  `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
