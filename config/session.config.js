const { User } = require('../models')
const expressSession = require("express-session")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todolist"


const session = expressSession({
    secret: process.env.SESSION_SECRET || 'super secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.SESSION_SECURE === 'true',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
});

const loadUser = (req, res, next) => {
    const { userId } = req.session;
    if(userId){
    User.findById(userId)
    .then(user => {
        req.user = user;
        res.locals.currentUser = user;
        next();
    })
    .catch(error => next(error));

}else{
    next();
}

}

module.exports = {
    session,
    loadUser
}