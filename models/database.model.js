const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const databaseSchema = new Schema ({
    name:{
        type:String,
        required: "Término necesario",
        trim: true
    },
    description:{
        type:String,
        maxLength: [500, "Seguro que puedes hacerlo más corto..."],
        trim: true
    },
    example:{
        type:String,
        maxLength: [500, "Haz ejemplos fáciles y más cortos..."],
        trim: true
    },
    category: {
        type:String,
    },
    file: {
        type:String,
        default: "/public/imagenes/3688989.jpeg",

    },
    link: {
        type:String,
        default: "https://media.makeameme.org/created/something-is-missing-6838a8d575.jpg"  

    },
    example1: {
        type:String, 

    },
    example2: {
        type:String, 

    },
    example3: {
        type:String, 
        
    },
    example4: {
        type:String, 

    },
    example5: {
        type:String, 

    },
})

const Database = mongoose.model("Database", databaseSchema);

module.exports = Database;