const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");

hbs.registerHelper('prettyDate', (date) =>  date.toLocaleDateString());

hbs.registerHelper('upperCase', (nickname) => nickname.charAt(0).toUpperCase() + nickname.slice(1)) 

hbs.registerHelper('spacesGone', (spaces) => spaces.split('').filter(e => e.trim().length).join(''))

// hbs.registerHelper('isSame', function(value, selected) {
//     return value === selected
// })

hbs.registerHelper('match', function (newexample, database){
   return  newexample.belongs.id === database
})

