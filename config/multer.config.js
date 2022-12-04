const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
// process.env.CLOUDINAY_NAME; process.env.KEY;process.env.CLOUDINAY_SECRET;
const CLOUDINARY_NAME = "dthjynocl";
const CLOUDINARY_KEY =  "331117497469659";
const CLOUDINARY_SECRET =  "M0r3d1ct9eEPRelQ9PtdDz34_n0";

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
