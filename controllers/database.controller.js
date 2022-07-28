const {Database} = require("../models")

module.exports.listOfDatabase = (req, res, next) => {
    Database.find(req.query)
    .then((databases) => {
        res.render("frontpage/main", {databases})
    })
    .catch(console.error("algo va mal en ListOfDatabase"))
}