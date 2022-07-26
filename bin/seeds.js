const mongoose = require('mongoose');
const Definition = require('../models/definition.model');
const information = require('../data/information.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  mongoose.connection.dropDatabase()
    .then(() => Definition.create(information))
    // Definition.create(information)
    .then(information => console.info(`Successfully created ${information.length} information`))
    .catch(error => console.error('An error ocurred running seeds', error))
    .then(() => mongoose.disconnect())
})