const {Database2, Newexample} = require("../models")


module.exports.listOfDatabase2 = (req, res, next) => {
    res.render("frontpage/next")
}

module.exports.listOfDatabase2 = (req, res, next) => {
    const { name, category }= req.query;
    const criteria = {};
    
    if (name){
        criteria.name = new RegExp (name, "i");
    }
    if (category){
        criteria.category = new RegExp (category, "i");
    }
    Database2.find(criteria)
    .then((databases) => {
        return Newexample.find()
        .populate("belongs")
        .then((newexamples) => {
            res.render("frontpage/next", {newexamples, databases, name, category})
        }
        )
    .catch((error) => next.error)

    })
}
