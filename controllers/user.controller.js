const { Definition } = require("../models");

module.exports.profile = (req, res, next) => {
  const { name, category } = req.query;
  const criteria = {};

  if (!req.user.admin) {
    criteria.author = req.user.id;
  }

  if (name) {
    criteria.name = new RegExp(name, "i");
  }
  if (category) {
    criteria.category = new RegExp(category, "i");
  }
  Definition.find(criteria)
    .populate("author")
    .then((definitions) => {
      res.render("users/profile", { definitions, name, category });
    })
    .catch((error) => next(error));
};

module.exports.delete = (req, res, next) => {
  Definition.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/profile");
    })
    .catch((error) => next(error));
};

module.exports.never = (req, res, next) => {
  res.render("users/never");
};
