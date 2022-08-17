const mongoose = require("mongoose");


// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Iron_learning"

mongoose
  .connect("mongodb://localhost/iron")
  .then(() => console.info("connected DB"))
  .catch((error) => console.error("error DB", error));
