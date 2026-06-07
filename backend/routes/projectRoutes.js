const express = require('express');
const router = express.Router();
const { upload } = require('../utils/cloudinary');
const Project = require('../models/Project');

// Middleware to restrict access to admin only
const checkAdminAuth = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};



// Add a new project (admin-only)
router.post('/add', checkAdminAuth, upload.fields([
  { name: 'bannerImage', maxCount: 1 },
  { name: 'screenshots', maxCount: 30 }
]), async (req, res) => {
  try {
    const {
        title,
        category,
        shortDescription,
        detailedDescription,
        technologies,
        githubUrl,
        liveUrl,
        screenshotDescriptions,
        featured
      } = req.body;

      const bannerImage =
        req.files?.bannerImage?.[0]?.path || "";

      const screenshots =
        req.files?.screenshots?.map(file => file.path) || [];

      const project = new Project({
        title,
        category,
        shortDescription,
        detailedDescription,

        technologies: technologies
          ? JSON.parse(technologies)
          : [],

        githubUrl,
        liveUrl,

        bannerImage,

        screenshots,

        screenshotDescriptions:
          screenshotDescriptions
            ? JSON.parse(screenshotDescriptions)
            : [],

        featured: featured === "true"
      });

      await project.save();

      res.status(201).json({
        success: true,
        project
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error.message
      });
    }
  }
);
// Get all projects (public)
router.get('/all', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET one project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update existing project
router.put(
  '/:id',
  checkAdminAuth,
  upload.fields([
    { name: 'bannerImage', maxCount: 1 },
    { name: 'screenshots', maxCount: 30 }
  ]),
  async (req, res) => {
    try {

      const updateData = { ...req.body };

      if (req.files?.bannerImage) {
        updateData.bannerImage =
          req.files.bannerImage[0].path;
      }

      if (req.files?.screenshots) {
        updateData.screenshots =
          req.files.screenshots.map(file => file.path);
      }

      if (updateData.technologies) {
        updateData.technologies =
          JSON.parse(updateData.technologies);
      }

      if (updateData.screenshotDescriptions) {
        updateData.screenshotDescriptions =
          JSON.parse(updateData.screenshotDescriptions);
      }

      const updatedProject =
        await Project.findByIdAndUpdate(
          req.params.id,
          updateData,
          {
            new: true,
            runValidators: true
          }
        );

      res.json(updatedProject);

    } catch (error) {
      res.status(500).json({
        error: error.message
      });
    }
  }
);


// Delete a project
router.delete('/:id', checkAdminAuth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;