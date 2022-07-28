const mongoose = require("mongoose");
const { Definition, Database } = require("../models");

module.exports.listOfDefinitions = (req, res, next) => {
    Definition.find(req.query)
    .then((definitions) => {
        return Database.find(req.query)
        .then((databases) => 
        res.render("definition/list", {definitions, databases}))
    .catch(console.error("algo va mal en listOfDefinitions"))

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
   product.image = req.file.path;
    
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