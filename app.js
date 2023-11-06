require("dotenv").config()

const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
// const bodyparser = require("body-parser")
const app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }));
// app.use(bodyparser.urlencoded())

require("./config/db.config");
require("./config/hbs.config");

const {session, loadUser } = require('./config/session.config');

app.use(session);
app.use(loadUser);

app.use((req, res, next) => {
    res.locals.query = req.query;
    res.locals.route = req.path;
    // res.locals.googleApiKey = process.env.GOOGLE_API_KEY
    res.locals.query = res.query;
    next()
})

const routes = require("./config/routes.config");
app.use("/", routes);

//errores--404
app.use((req, res, next) => {
    next(createError(404, "Página no encontrada"))
})
//error-- 500
app.use((error, req, res, next) => {
    console.error(error);
    const message = error.message;
    const metadata = app.get('env') === 'development' ? error: {};
    const status = error.status || 500;
    res.status(status)
        .render(`errors/500`, { message, metadata })
});

const port = process.env.PORT;
app.listen(port, () => console.log(`here we go!`))


