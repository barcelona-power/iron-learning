const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");

hbs.registerHelper('prettyDate', (date) =>  date.toLocaleDateString());

hbs.registerHelper('spacesGone', (spaces) => spaces.split('').filter(e => e.trim().length).join(''))