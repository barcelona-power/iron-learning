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
        return User.create(req.body).then((user) => res.redirect("/"));
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
