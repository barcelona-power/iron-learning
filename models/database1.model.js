const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const databaseSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
  },
  example1: {
    type: String,
    trim: true,
  },
  example2: {
    type: String,
    trim: true,
  },
  example3: {
    type: String,
    trim: true,
  },
  example4: {
    type: String,
    trim: true,
  },
  example5: {
    type: String,
    trim: true,
  },
  example6: {
    type: String,
    trim: true,
  },
  img: {
    type: Array,
  },
  link:{
    type: Array
  }
});

const Database1 = mongoose.model("Database1", databaseSchema);

module.exports = Database1;
