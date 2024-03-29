const { Database, Newexample } = require("../models");

module.exports.listOfDatabase = (req, res, next) => {
  const { name, category } = req.query;
  const criteria = {};
  console.log("abababa")
  if (name) {
    criteria.name = new RegExp(name, "i");
  }
  if (category) {
    criteria.category = new RegExp(category, "i");
  }
  Database.find(criteria).then((databases) => {
    return Newexample.find()
      .populate("belongs")
      .populate("author")
      .then((newexamples) => {
        res.render("frontpage/main", {
          newexamples,
          databases,
          name,
          category,
        });
      })
      .catch((error) => next.error);
  });
};
