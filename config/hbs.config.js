const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");

hbs.registerHelper('prettyDate', (date) =>  date.toLocaleDateString());

hbs.registerHelper('upperCase', (nickname) => nickname.charAt(0).toUpperCase() + nickname.slice(1)) 

hbs.registerHelper('spacesGone', (spaces) => spaces.split('').filter(e => e.trim().length).join(''))