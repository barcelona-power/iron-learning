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
        type:Array,
    },
    file: {
        type:Array,
        default: "/public/imagenes/3688989.jpeg",

    },
    link: {
        type:String,
        default: "https://media.makeameme.org/created/something-is-missing-6838a8d575.jpg"  

    },
    video: {
        type:Array, 
    }
})

const Database2 = mongoose.model("Database2", databaseSchema);

module.exports = Database2;