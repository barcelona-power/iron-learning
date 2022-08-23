
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer")
 
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME 
const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY 
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET 


cloudinary.config({
  cloud_name:CLOUDINARY_NAME,
  api_key:CLOUDINARY_KEY,
  api_secret:CLOUDINARY_SECRET
});
 
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png', 'gif', 'webp' ],
    folder: 'iron-learning' 
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});
 
module.exports = multer({ storage });