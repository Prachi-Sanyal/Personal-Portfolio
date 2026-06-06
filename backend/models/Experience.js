const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
{
  company: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: [
      "Internship",
      "Freelance",
      "Full Time",
      "Virtual Internship",
      "Job Simulation"
    ],
  },

  startDate: String,
  endDate: String,

  current: {
    type: Boolean,
    default: false,
  },

  description: {
    type: String,
  },

  skills: [String],
},
{
  timestamps: true,
});

module.exports = mongoose.model(
  "Experience",
  ExperienceSchema
);