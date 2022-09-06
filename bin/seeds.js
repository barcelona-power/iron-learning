const mongoose = require("mongoose");
const Database = require("../models/database.model");
const information = require("../data/information.json");

require("../config/db.config");

mongoose.connection.once("open", () => {
  mongoose.connection.collections["databases"]
    .drop()
    .then(() => Database.create(information))
    // mongoose.connection.dropDatabase()
    //   .then(() => Database.create(information))
    .then((information) =>
      console.info(
        `Se creó una base de datos de ${information.length} puntos de información`
      )
    )
    .catch((error) =>
      console.error("Algo va mal con seeds. corre y escóndete", error)
    )
    .then(() => mongoose.disconnect());
});
