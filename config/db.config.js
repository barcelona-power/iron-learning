const mongoose = require("mongoose");


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/iron-learning-data"

mongoose
  .connect(MONGODB_URI)
  .then(() => console.info("Conectado a la base de datos"))
  .catch((error) => console.error("error al conectar a la base de datos", error));
