const mongoose = require("mongoose");

const CertificationSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  issuer: {
    type: String,
    required: true,
  },

  issueDate: {
    type: String,
  },

  credentialUrl: {
    type: String,
  },

  certificateImage: {
    type: String,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model(
  "Certification",
  CertificationSchema
);