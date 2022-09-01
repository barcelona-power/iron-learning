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
        trim: true
    },
    example:{
        type:String,
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
    video: {
        type:String, 

    },
})

const Database1 = mongoose.model("Database1", databaseSchema);

module.exports = Database1;