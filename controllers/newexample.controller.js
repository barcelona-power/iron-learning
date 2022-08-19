const mongoose = require("mongoose")
const {Newexample} = require("../models")

module.exports.new = (req, res, next) => {

    res.render("frontpage/newexample", {data:req.params})
}

module.exports.doNew = (req, res, next) => {

    const data = ({newexample, categoryexample} = {
        ...req.body,
        belongs: req.params.id
      })
    Newexample.create(data)
    .then((data) => res.redirect("/main"))
    .catch((error) => {
        if(error instanceof mongoose.Error.ValidationError) {
            res.render("frontpage/newexample", {errors: error.errors, newexample: data});
        } else {
            next(error);
        }
      })
}


module.exports.newlist = (req, res, next) => {
    Newexample.find()
    .populate("belongs")
    .then((list)=>{
        console.log(list)
        res.render("frontpage/newexample", {list})
    })
    .catch((error) => next(error))
}