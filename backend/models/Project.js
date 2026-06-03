// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'web', 'desktop'
  description: { type: String, required: true },
  url: { type: String }, // Live deployed URL (optional)
  bannerImage: { type: String, required: true }, // Cloudinary URL
  screenshots: [String], // Array of Cloudinary URLs
  screenshotDescriptions: [String] // Optional: match screenshot order
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
