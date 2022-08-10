const { Definition, Database } = require("../models");



module.exports.profile = (req, res, next) => {
    const criteria = {};
    if (!req.user.admin) {
      criteria.author = req.user.id
    }
    Definition.find(criteria)
    .populate("author")
    .then((definitions) => {
          res.render("users/profile", { definitions })
    })
    .catch((error) => next(error))
  };

  module.exports.delete = (req, res, next) => {
    Definition.findByIdAndDelete(req.params.id)
      .then(() => {res.redirect("/profile")})
      .catch((error) => next(error))
  };