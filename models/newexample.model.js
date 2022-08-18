const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema ({
    newexample:{
        type:String,
        maxLength: [500, "Seguro que puedes hacerlo más corto..."],
        minLength: [1, "puedes esforzarte un poco más en el ejemplo..."],
        trim: true
    },
    // belong: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: "definition",
    //   } 
})


const Newexample = mongoose.model("Newexample", exampleSchema);

module.exports = Newexample;