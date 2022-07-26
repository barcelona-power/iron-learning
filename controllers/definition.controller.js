const mongoose = require("mongoose");
const { Definition } = require("../models");

module.exports.listOfDefinitions = (req, res, next) => {
    Definition.find(req.query)
    .then((definitions) => {
        res.render("definition/list", {definitions})
    })
}

module.exports.exampleDefinition = (req, res, next) => {
    Definition.findById(req.params.id)
      .then((definition) => res.render("definition/edit", { definition }))
  };
   

module.exports.formDefinition = (req, res, next) => {
  res.render("definition/definition");
};

module.exports.createDefinition = (req, res, next) => {
    const data = req.body;
    
    Definition.create(data)
    .then((definition) =>{
        res.redirect("/create-definition")
    })
}

module.exports.delete = (req, res, next) => {
    Definition.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/list")
    })
}