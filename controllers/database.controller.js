const {Database} = require("../models")

module.exports.listOfDatabase = (req, res, next) => {
    const { name }= req.query;
    const criterial = {};
    
    if (name){
        criterial.name = new RegExp (name, "i");
    }


    Database.find(criterial)
    .then((databases) => {
        res.render("frontpage/main", {databases, name})
    })
    .catch((error) => next.error)
}