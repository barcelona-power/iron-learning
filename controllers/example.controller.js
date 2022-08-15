const mongoose = require("mongoose")
const {Example} = require("../models")

module.exports.new = (req, res, next) => {
    res.render("frontpage/example")
}


module.exports.doNew = (req, res, next) => {
    const data = ({ example, belongs, exUser } = req.body)
    Example.create(data)
    .then(() => res.redirect("/main/example"))
    .catch((error) => {
        if(error instanceof mongoose.Error.ValidationError) {
            res.render("frontpage/main", {errors: error.errors, definition: data});
        } else {
            next(error);
        }
      })
}

