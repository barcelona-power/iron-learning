const express = require("express");


const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


require("./config/hbs.config");

const routes = require("./config/routes.config");
app.use("/", routes);

const port = 3000;
app.listen(port, () => console.log(`here we go!`))