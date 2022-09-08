const { Database1, Newexample } = require("../models");

module.exports.listOfDatabase1 = (req, res, next) => {
  const { name, category } = req.query;
  const criteria = {};

  if (name) {
    criteria.name = new RegExp(name, "i");
  }
  if (category) {
    criteria.category = new RegExp(category, "i");
  }
  Database1.find(criteria).then((databases) => {
    return Newexample.find()
      .populate("belongs")
      .then((newexamples) => {
        res.render("frontpage/begin", {
          newexamples,
          databases,
          name,
          category,
        });
      })
      .catch((error) => next.error);
  });
};