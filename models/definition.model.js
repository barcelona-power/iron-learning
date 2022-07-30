const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const definitionSchema = new Schema ({
    name:{
        type:String,
        // required: "Término necesario",
        maxLength: [20, "No se aceptan términos en élfico"],
        //minLength: [2, "No se aceptan términos en élfico"],

        trim: true
    },
    description:{
        type:String,
        maxLength: [500, "Seguro que puedes hacerlo más corto..."],
        trim: true
    },
    example:{
        type:String,
        maxLength: [500, "Seguro que puedes hacerlo más corto..."],
        trim: true
    },
    category: {
        type:String,
    },
    file: {
        type:String,
        //default: "/public/imagenes/3688989.jpeg",
        validate: {
            validator: function(image){
                try{
                    new URL(image)
                    return true 
                }catch (error){
                    return false;
                }
            },
            message: image => `URL no valida`
        }

    },
    link: {
        type:String,
        //default: "https://media.makeameme.org/created/something-is-missing-6838a8d575.jpg",

    },
    author: {
        type:String
    }

})

const Definition = mongoose.model("Definition", definitionSchema);

module.exports = Definition;