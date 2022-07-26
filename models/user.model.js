const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{5,}$/;

const userSchema = new Schema({
    nickname: {
        type : String,
        required: "Nombre obligatorio",
        maxLength: [23, "te has pasado tres pueblos con el tamaño"],
        trim: true
    },
    knowledge: {
        type : String,
        required: "Algún conocimiento tendrás... ",
        maxLength: [33, "Eso no existe"],
        trim: true
    }, 
    city: {
        type: String,
        required: "De alguna ciudad debes de ser...",
        maxLength: [20, "Esa ciudad es del señor de los anillos?"],
        trim: true
    },
    email: {
        type: String,
        required: "El email es obligatorio. Prometemos enviar mucho spam",
        trim: true,
        lowercase: true,
        unique: true,
        match: [EMAIL_PATTERN, "Email no válido. Necesitas proporcionar otro mail"]
    },
    password: {
        type: String,
        required: "Necesitas proporcionar un mail. Es por tu seguridad y la nuestra",
        match: [PW_PATTERN, "Necesitas al menos 5 caracteres"]
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;


// User.create({
//     nickname: "Saitama",
//     knowledge: "nothing",
//     city:
// })