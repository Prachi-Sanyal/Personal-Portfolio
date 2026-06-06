/***
 * // models/Project.js
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
***/

const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: [
      "Development",
      "Data Analytics",
      "AI/ML"
    ],
    required: true,
  },

  shortDescription: {
    type: String,
    required: true,
  },

  detailedDescription: {
    type: String,
  },

  technologies: [String],

  githubUrl: {
    type: String,
  },

  liveUrl: {
    type: String,
  },

  bannerImage: {
    type: String,
    required: true,
  },

  screenshots: [String],

  screenshotDescriptions: [String],

  featured: {
    type: Boolean,
    default: false,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model("Project", ProjectSchema);
