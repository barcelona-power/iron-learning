const { Definition, User } = require("../models");

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
        console.log("criterrrriiiaiaaaalll");

    })
    .catch((error) => next(error));
        console.log("criterrrriiiaiaaaalll");

};

module.exports.list = (req, res, next) => {
  const {lat, lng } = req.query;
  const criteria = {};
  if(lat && lng) {
    criteria.location = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
        // this can set the maximum distance for the search area
        $maxDistance: 100
      }
    }
  }
  User.find(criteria)
    .then((users) => {
      return User.find(criteria)
        .then((user) =>
          res.render("users/list", {
            users,
            user
          })
        )
        .catch((error) => next(error));
    });
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
