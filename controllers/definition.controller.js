const mongoose = require("mongoose");
const { Definition, Database } = require("../models");

module.exports.listOfDefinitions = (req, res, next) => {
  const { name, category } = req.query;
  const criterial = {};

  if (name) {
    criterial.name = new RegExp(name, "i");
  }
  if (category){
    criterial.category = new RegExp (category, "i");
}
  Definition.find(criterial)
  .then((definitions) => {
    return Database.find(criterial)
      .then((databases) =>
        res.render("definition/list", { definitions, databases, name, category })
      )
      .catch((error) => next(error))
  });
};


module.exports.exampleDefinition = (req, res, next) => {
  Definition.findById(req.params.id)
    .then((definition) => res.render("definition/edit", { definition }))
    .catch((error) => next(error))
};

module.exports.formDefinition = (req, res, next) => {
  res.render("definition/definition");
};

module.exports.createDefinition = (req, res, next) => {
  const data = req.body;
 
  Definition.create(data)
  .then(() => res.redirect("/create-definition"))
  .catch((error) => {
    if(error instanceof mongoose.Error.ValidationError) {
        res.render("definition/definition", {errors: error.errors, definition: data});
    } else {
        next(error);
    }
  })
}; 

module.exports.delete = (req, res, next) => {
  Definition.findByIdAndDelete(req.params.id)
    .then(() => {res.redirect("/list")})
    .catch((error) => next(error))
};
