const nodemailer = require("nodemailer");

const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iron.learning.welcomer@gmail.com",
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
        <p>Me alegra tenerte a bordo con nosotros en <b>iron-learning</b></p>
        <p>please confirm your account using the following link:</p>
    `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
