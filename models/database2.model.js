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
    category: {
        type:String,
    },
    videoContent:{
        type:String,
        default:"videos del tema"
    },
    file1: {
        type:String,
        default: "/public/imagenes/3688989.jpeg",

    },
    file2: {
        type:String,
        default: "/public/imagenes/3688989.jpeg",

    },
    file3: {
        type:String,
        default: "/public/imagenes/3688989.jpeg",

    },
    link: {
        type:String,
        default: "https://media.makeameme.org/created/something-is-missing-6838a8d575.jpg"  

    },
    video1: {
        type:String, 
    },
    video2: {
        type:String, 
    },
    video3: {
        type:String, 
    },
    video4: {
        type:String, 
    },
    video5: {
        type:String, 
    },
    video6: {
        type:String, 
    },
    video7: {
        type:String, 
    }
})

const Database2 = mongoose.model("Database2", databaseSchema);

module.exports = Database2;