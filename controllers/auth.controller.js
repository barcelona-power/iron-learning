const mongoose = require("mongoose");
const { User } = require("../models");

module.exports.register = (req, res, next) => {
  res.render(`frontpage/frontpage`);
};

module.exports.doRegister = (req, res, next) => {
  function renderWithErrors(errors) {
    res.render("frontpage/frontpage", {
      user: req.body,
      errors,
    });
  }

  const { email, nickname } = req.body;
  User.findOne({ $or: [{ email }, { nickname }] })
    .then((user) => {
      if (user) {
        const errors = {};
        if (user.email === email) {
          errors.email = "Este correo electrónico ya existe!";
        }
        if (user.nickname === nickname) {
          errors.nickname = "Este nickname ya existe!";
        }
        renderWithErrors(errors);
      } else {
        return User.create(req.body)
        .then((user) => res.redirect("/login"));
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
  res.render("login/login")
}

module.exports.doLogin = (req, res, next) => {

  function renderInvalidLogin() {
    res.render("login/login", {
      user: req.body,
      errors: {email: 'Nickname o contraseña incorrectas'}
    });
  }

  const {email, password} = req.body;
  User.findOne({email})
  .then(user =>{
    if(!user){
      renderInvalidLogin()
    } else {
      return user.checkPassword(password)
      .then(match => {
        if(match) {
          req.session.userId = user.id;
          res.redirect('/main')
        } else {
          renderInvalidLogin()
        }
      })
    }
  })
  .catch(error => next(error))
}