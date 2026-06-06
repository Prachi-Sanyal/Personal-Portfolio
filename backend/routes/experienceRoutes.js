const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

//console.log("✅ Experience routes loaded");
const checkAdminAuth = (req, res, next) => {
    //console.log("🚀 POST /experience/add hit");
  //console.log("BODY =", req.body);
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access Denied" });
  }
};



// Add Experience
router.post("/add", checkAdminAuth, async (req, res) => {
  try {
        console.log("BODY =", req.body);

    const experience = new Experience({
      company: req.body.company,
      role: req.body.role,
      type: req.body.type,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      current: req.body.current === "true",
      description: req.body.description,
      skills: req.body.skills
  ? typeof req.body.skills === "string"
    ? JSON.parse(req.body.skills)
    : req.body.skills
  : [],
    });

    await experience.save();

    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Experience
router.get("/all", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({
      createdAt: -1,
    });

    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Experience
router.delete("/:id", checkAdminAuth, async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);

    res.json({
      message: "Experience deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;