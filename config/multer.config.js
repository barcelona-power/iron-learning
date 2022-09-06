const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const CLOUDINARY_NAME = "du3v1mwzj";
const CLOUDINARY_KEY = "459475185293298";
const CLOUDINARY_SECRET = "vNNs7t6xI9rA9xf2LYYkpKxE8jY";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["jpg", "png", "gif", "webp"],
    folder: "iron-learning",
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  },
});

module.exports = multer({ storage });
