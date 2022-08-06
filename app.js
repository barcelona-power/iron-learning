require("dotenv").config()
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: false }));
const {session, loadUser } = require('./config/session.config');
app.use(session);
app.use(loadUser);

require("./config/db.config");
require("./config/hbs.config");

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


const port = 3001;
app.listen(port, () => console.log(`here we go!`))

