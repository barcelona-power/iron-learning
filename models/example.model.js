const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema ({
    example:{
        type:String,
        maxLength: [500, "Seguro que puedes hacerlo más corto..."],
        trim: true
    },
    belongs: {
        type:String,
    },
    exUser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }
})

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;