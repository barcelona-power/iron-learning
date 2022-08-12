const mongoose = require("mongoose");
const { Definition, Database } = require("../models");

module.exports.listOfDefinitions = (req, res, next) => {
  const { name, category } = req.query;
  const criteria = {};
  if (req.user.admin) {
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
      return Database.find(criteria)
        .then((databases) =>
          res.render("definition/list", {
            definitions,
            databases,
            name,
            category,
          })
        )
        .catch((error) => next(error));
    });
};

module.exports.formDefinition = (req, res, next) => {
  res.render("definition/definition");
};

module.exports.createDefinition = (req, res, next) => {
  const data = ({ name, category, description, example, file, link } = {
    ...req.body,
    author: req.user.id,
  });

  Definition.create(data)
    .then(() => res.redirect("/create-definition"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("definition/definition", {
          errors: error.errors,
          definition: data,
        });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Definition.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/list");
    })
    .catch((error) => next(error));
};

module.exports.edit = (req, res, next) => {
  Definition.findById(req.params.id)
    .then((definition) => {
      if (definition) {
        res.render("definition/edit", { definition });
      } else {
        res.redirect("/profile");
      }
    })
    .catch((error) => next(error));
};



module.exports.doEdit = (req, res, next) => {

  Definition.findByIdAndUpdate(req.params.id, req.body) 
    .then(() => res.redirect("/profile"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("definition/edit", {
          errors: error.errors,
          definition: data,
        });
      } else {        
       next(error);
      }
    });
};
