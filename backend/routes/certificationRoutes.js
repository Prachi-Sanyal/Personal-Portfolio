const express = require("express");
const router = express.Router();
const Certification = require("../models/Certification");
const { upload } = require("../utils/cloudinary");

const checkAdminAuth = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};

// Add Certification
router.post(
  "/add",
  checkAdminAuth,
  upload.single("certificateImage"),
  async (req, res) => {
    try {
      const certification = new Certification({
        title: req.body.title,
        issuer: req.body.issuer,
        issueDate: req.body.issueDate,
        credentialUrl: req.body.credentialUrl,
        certificateImage: req.file?.path || "",
      });

      await certification.save();

      res.status(201).json(certification);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Get All Certifications
router.get("/all", async (req, res) => {
  try {
    const certifications = await Certification.find().sort({
      createdAt: -1,
    });

    res.json(certifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Certification
router.delete("/:id", checkAdminAuth, async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);

    res.json({
      message: "Certification deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;