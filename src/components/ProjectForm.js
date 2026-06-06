import React, { useState, useEffect } from 'react';
import { addProject, getProjectById, updateProject } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectForm = ({ isEdit }) => {
  const [formData, setFormData] = useState({
  title: "",
  category: "Development",
  shortDescription: "",
  detailedDescription: "",
  technologies: "",
  githubUrl: "",
  liveUrl: "",
  screenshotDescriptions: "",
  featured: false,
});
  const [files, setFiles] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {
      getProjectById(id).then(data => {
        setFormData(data);
      });
    }
  }, [id, isEdit]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setFiles(prev => ({ ...prev, [e.target.name]: e.target.files }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const fd = new FormData();

  fd.append("title", formData.title);
  fd.append("category", formData.category);
  fd.append("shortDescription", formData.shortDescription);
  fd.append("detailedDescription", formData.detailedDescription);

  fd.append(
    "technologies",
    JSON.stringify(
      formData.technologies
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
    )
  );

  fd.append("githubUrl", formData.githubUrl);
  fd.append("liveUrl", formData.liveUrl);

  fd.append(
    "screenshotDescriptions",
    JSON.stringify(
      formData.screenshotDescriptions
        .split("|")
        .map(d => d.trim())
    )
  );

  fd.append("featured", formData.featured);

  if (files.bannerImage?.[0]) {
    fd.append("bannerImage", files.bannerImage[0]);
  }

  if (files.screenshots) {
    [...files.screenshots].forEach(file => {
      fd.append("screenshots", file);
    });
  }

  if (isEdit) {
    await updateProject(id, fd);
  } else {
    await addProject(fd);
  }

  navigate("/secret-admin/dashboard");
};
  return (
    <div className="project-form">
      <h3>{isEdit ? "Edit" : "Add"} Project</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

  <input
    type="text"
    name="title"
    value={formData.title}
    onChange={handleChange}
    placeholder="Project Title"
    required
  />

  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
  >
    <option value="Development">Development</option>
    <option value="Data Analytics">Data Analytics</option>
    <option value="AI/ML">AI/ML</option>
  </select>

  <textarea
    name="shortDescription"
    value={formData.shortDescription}
    onChange={handleChange}
    placeholder="Short Description (shown on project card)"
    rows="3"
    required
  />

  <textarea
    name="detailedDescription"
    value={formData.detailedDescription}
    onChange={handleChange}
    placeholder="Detailed Description"
    rows="6"
  />

  <input
    type="text"
    name="technologies"
    value={formData.technologies}
    onChange={handleChange}
    placeholder="Python, SQL, Power BI, Tableau"
  />

  <input
    type="text"
    name="githubUrl"
    value={formData.githubUrl}
    onChange={handleChange}
    placeholder="GitHub URL"
  />

  <input
    type="text"
    name="liveUrl"
    value={formData.liveUrl}
    onChange={handleChange}
    placeholder="Live URL"
  />

  <label>Banner Image</label>
  <input
    type="file"
    name="bannerImage"
    onChange={handleFileChange}
  />

  <label>Screenshots</label>
  <input
    type="file"
    name="screenshots"
    multiple
    onChange={handleFileChange}
  />

  <textarea
    name="screenshotDescriptions"
    value={formData.screenshotDescriptions}
    onChange={handleChange}
    placeholder="Description 1 | Description 2 | Description 3"
    rows="4"
  />

  <label>
    <input
      type="checkbox"
      checked={formData.featured}
      onChange={(e) =>
        setFormData(prev => ({
          ...prev,
          featured: e.target.checked
        }))
      }
    />
    Featured Project
  </label>

  <button type="submit">
    {isEdit ? "Update Project" : "Add Project"}
  </button>

</form>
    </div>
  );
};

export default ProjectForm;
