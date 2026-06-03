import React, { useState, useEffect } from 'react';
import { addProject, getProjectById, updateProject } from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectForm = ({ isEdit }) => {
  const [formData, setFormData] = useState({
    name: '', category: '', description: '', url: '', screenshotDescriptions: ''
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

  const handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    for (let key in formData) fd.append(key, formData[key]);
    for (let key in files) {
      [...files[key]].forEach(file => fd.append(key, file));
    }

    isEdit ? await updateProject(id, fd) : await addProject(fd);
    navigate('/admin/dashboard');
  };

  return (
    <div className="project-form">
      <h3>{isEdit ? "Edit" : "Add"} Project</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input name="url" value={formData.url} onChange={handleChange} placeholder="Live URL" />
        <input type="file" name="bannerMedia" onChange={handleFileChange} />
        <input type="file" name="screenshots" onChange={handleFileChange} multiple />
        <textarea name="screenshotDescriptions" value={formData.screenshotDescriptions} onChange={handleChange} placeholder='["desc1", "desc2"]' />
        <button type="submit">{isEdit ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default ProjectForm;
