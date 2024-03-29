const mongoose = require("mongoose");
const { User } = require("../models");
const { sendRegistrationEmail } = require("../config/mailer.config");

module.exports.register = (req, res, next) => {
  res.render(`register/register`);
};

module.exports.doRegister = (req, res, next) => {
  function renderWithErrors(errors) {
    res.status(400).render("register/register", {
      user: req.body,
      errors,
    });
  }
  const { email, lat, lng } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        const errors = {};
        if (user.email === email) {
          errors.email = "Este correo electrónico ya existe!";
        }
        renderWithErrors(errors);
      } else {
        const user = req.body;
        // user.profilePic = req.file.path;
        if(lat && lng){
          user.location = {
            type: 'Point',
            coordinates: [lng, lat]
          }
        }
        return User.create(user).then((user) => {
          sendRegistrationEmail(user);
          res.redirect("/");
        });
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
};

module.exports.login = (req, res, next) => {
  res.render("frontpage/frontpage");
};

module.exports.doLogin = (req, res, next) => {
  function renderInvalidLogin() {
    res.render("frontpage/frontpage", {
      user: req.body,
      errors: { email: "Nickname o contraseña incorrectas" },
    });
  }
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        renderInvalidLogin();
      } else {
        return user.checkPassword(password).then((match) => {
          if (match) {
            req.session.userId = user.id;
            res.redirect("/next");
          } else {
            renderInvalidLogin();
          }
        });
      }
    })
    .catch((error) => next(error));
};


module.exports.logOut = (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.redirect("/");
  }
};
