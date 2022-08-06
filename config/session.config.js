const expressSession = require("express-session")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todolist"


const session = expressSession({
    secret: process.env.SESSION_SECRET || 'super secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.SESSION_SECURE === 'true',
        httpOnly: true,
    
    }
})

module.exports.session = session;