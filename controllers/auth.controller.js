const mongoose = require('mongoose')
const { User } = require('../models')

module.exports.register = (req, res, next) => {
    res.render(`frontpage/frontpage`)
}

module.exports.doRegister = (res, req, next) => {
    const user = req.body;
    User.create(user)
    .then(user => res.redirect("/frontpage"))
    .catch(error => {
        if (error instanceof mongoose.Error.ValidationError){
            res.render('frontpage/frontpage', { user, errors: error.errors });
        } else {
            next(error);
        }
    })
}