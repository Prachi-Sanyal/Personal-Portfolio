const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET_KEY
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isImage = file.mimetype.startsWith("image");
    const isVideo = file.mimetype.startsWith("video");

    return {
      folder: 'portfolio_projects',
      resource_type: isVideo ? 'video' : 'image', // 🔥 auto-detect
      allowed_formats: isVideo
        ? ['mp4', 'webm', 'mov']
        : ['jpg', 'jpeg', 'png'],
    };
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };