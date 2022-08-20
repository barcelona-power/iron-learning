const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iron.learning.welcomer@gmail.com",
    pass: "bgszmdgpwcclsiyt",
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
        <p>Welcome to <b>todo list app</b></p>
        <p>please confirm your account using the following link:</p>
        <a href="http://localhost:3000/users/${user.id}/confirm">
            Activate your account
        </a>
    `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};


