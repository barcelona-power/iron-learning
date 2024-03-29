const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const definitionSchema = new Schema(
  {
    name: {
      type: String,
      required: "Término necesario",
      maxLength: [30, "No se aceptan términos en élfico"],
      minLength: [2, "Define términos o conceptos, no letras!"],
      trim: true,
    },
    category: {
      type: String,
      required: "Debe pertenecer a alguna categoría",
    },
    description: {
      type: String,
      maxLength: [500, "Seguro que puedes hacerlo más corto..."],
      trim: true,
      // required: "Necesitas proporcionar alguna explicación del término que estás creando",
    },
    example: {
      type: String,
      maxLength: [500, "Haz ejemplos fáciles y más cortos..."],
      trim: true,
      default: "Wikipedia",
    },
    file: {
      type: String,
      default:
        "https://res.cloudinary.com/du3v1mwzj/image/upload/v1661164212/iron-learning/imgs/mix/mordor_yakmyr.jpg",
      validate: {
        validator: function (image) {
          try {
            new URL(image);
            return true;
          } catch (error) {
            return false;
          }
        },
        message: (image) => `URL no valida`,
      },
    },
    link: {
      type: String,
      default:
        "https://media.makeameme.org/created/something-is-missing-6838a8d575.jpg",
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

definitionSchema.pre("validate", function (next) {
  this.file = this.file || undefined;
  this.category = this.category || undefined;
  this.link = this.link || undefined;
  next();
});

const Definition = mongoose.model("Definition", definitionSchema);

module.exports = Definition;
