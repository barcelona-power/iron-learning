const mongoose = require('mongoose');
const Database = require('../models/database.model');
const information = require('../data/information.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  mongoose.connection.collections['databases'].drop()
    .then(() => Database.create(information))
  // mongoose.connection.dropDatabase()
  //   .then(() => Database.create(information))
    // Database.create(information)
    .then(information => console.info(`Successfully created ${information.length} information`))
    .catch(error => console.error('An error ocurred running seeds', error))
    .then(() => mongoose.disconnect())
})

