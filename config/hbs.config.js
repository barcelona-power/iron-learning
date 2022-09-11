const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");

hbs.registerHelper('prettyDate', (date) =>  date.toLocaleDateString());

hbs.registerHelper('upperCase', (nickname) => nickname.charAt(0).toUpperCase() + nickname.slice(1)) 

hbs.registerHelper('spacesGone', (spaces) => spaces.split('').filter(e => e.trim().length).join(''))

hbs.registerHelper('navActive', (path, route) => path === route ? "active dest" : "")
hbs.registerHelper('navActiveMod', (path, route) => path === route ? "active destmod" : "")
hbs.registerHelper('navSpin', (path, route) => path === route ? "fa-spin" : "")

// hbs.registerHelper('isSame', function(value, selected) {
//     return value === selected
// })

hbs.registerHelper('match', function (newexample, database){
   return  newexample.belongs.id === database
   
})

