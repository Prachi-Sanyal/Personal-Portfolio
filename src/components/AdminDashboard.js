import React, { useEffect, useState } from 'react';
import { getProjects, deleteProject } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isAdmin")) return navigate("/admin");
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      await deleteProject(id);
      fetchProjects();
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>My Projects</h2>
      <Link to="/admin/add">➕ Add New</Link>
      <div className="project-list">
        {projects.map(proj => (
          <div className="project-card" key={proj._id}>
            <h4>{proj.name}</h4>
            <p>{proj.category}</p>
            <Link to={`/admin/edit/${proj._id}`}>✏️ Edit</Link>
            <button onClick={() => handleDelete(proj._id)}>🗑️ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
