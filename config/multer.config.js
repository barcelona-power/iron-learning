
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer")
 
cloudinary.config({
  cloud_name:"du3v1mwzj",
  api_key:"459475185293298",
  api_secret:"vNNs7t6xI9rA9xf2LYYkpKxE8jY"
});
 
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png', 'gif', ],
    folder: 'iron-learning' // The name of the folder in cloudinary
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});
 
//                     storage: storage
module.exports = multer({ storage });