const {Database} = require("../models")

module.exports.listOfDatabase = (req, res, next) => {
    const { name, category }= req.query;
    const criterial = {};
    
    if (name){
        criterial.name = new RegExp (name, "i");
    }
    if (category){
        criterial.category = new RegExp (category, "i");
    }
    Database.find(criterial)
    .then((databases) => {
        res.render("frontpage/main", {databases, name, category})
    })
    .catch((error) => next.error)
}