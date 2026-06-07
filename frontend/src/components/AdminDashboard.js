import React, { useEffect, useState } from "react";
import {
  getProjects,
  getCertifications,
  getExperiences,
  deleteProject,
  deleteCertification,
  deleteExperience,
  checkAdminAuth,
  logoutAdmin,
} from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
const [experiences, setExperiences] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
  try {
    const projectsData =
      await getProjects();

    const certificationsData =
      await getCertifications();

    const experiencesData =
      await getExperiences();

    setProjects(projectsData);
    setCertifications(certificationsData);
    setExperiences(experiencesData);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        await checkAdminAuth();
        fetchData();
      } catch (error) {
        navigate("/secret-admin");
      }
    };

    verifyAdmin();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id);
        fetchData();
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const handleCertificationDelete = async (id) => {
  if (window.confirm("Delete this certification?")) {
    try {
      await deleteCertification(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
};

const handleExperienceDelete = async (id) => {
  if (window.confirm("Delete this experience?")) {
    try {
      await deleteExperience(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
};

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      sessionStorage.removeItem("isAdmin");
      navigate("/secret-admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="admin-dashboard">

      <div className="dashboard-header">
  <div>
    <h2>Portfolio Admin Dashboard</h2>
    <p>Manage Projects, Certifications & Experience</p>
  </div>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>

      <div className="stats-grid">

  <div className="stat-card">
    <h3>{projects.length}</h3>
    <p>Projects</p>
  </div>

  <div className="stat-card">
    <h3>{certifications.length}</h3>
    <p>Certifications</p>
  </div>

  <div className="stat-card">
    <h3>{experiences.length}</h3>
    <p>Experience</p>
  </div>

</div>
      

<div className="action-buttons">
<Link to="/secret-admin/add">
  ➕ Add Project
</Link>

&nbsp;&nbsp;&nbsp;

<Link to="/secret-admin/add-certification">
  🏆 Add Certification
</Link>

&nbsp;&nbsp;&nbsp;

<Link to="/secret-admin/add-experience">
  💼 Add Experience
</Link>

</div>
<h3 className="section-title">
  🚀 Projects
</h3>
      <div className="project-list">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((proj) => (
            <div className="project-card" key={proj._id}>
             <h4>{proj.title}</h4>

<p>
  <strong>{proj.category}</strong>
</p>

<p>
  {proj.shortDescription}
</p>

{proj.featured && (
  <span className="featured-badge">
    ⭐ Featured
  </span>
)}

              <div className="card-actions">

  <Link
    className="edit-btn"
    to={`/secret-admin/edit/${proj._id}`}
  >
    ✏️ Edit
  </Link>

  <button
    className="delete-btn"
    onClick={() => handleDelete(proj._id)}
  >
    🗑️ Delete
  </button>

</div>
            </div>
          ))
        )}
      </div>
      <hr />

<h3 className="section-title">
  🏆 Certifications
</h3>
{
  certifications.length === 0
  ? (
      <p>No certifications added yet.</p>
    )
  : (
      certifications.map((cert) => (
  <div
    key={cert._id}
    className="project-card"
  >
    <h4>{cert.title}</h4>

    <p>
      <strong>{cert.issuer}</strong>
    </p>

    <p>{cert.issueDate}</p>

    <div className="card-actions">

      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="edit-btn"
      >
        🔗 View
      </a>

      <button
        className="delete-btn"
        onClick={() =>
          handleCertificationDelete(cert._id)
        }
      >
        🗑️ Delete
      </button>

    </div>

  </div>
))
    )
}

<hr />

<h3 className="section-title">
  💼 Experience
</h3>

{
  experiences.length === 0
  ? (
      <p>No experience added yet.</p>
    )
  : (
      experiences.map((exp) => (
  <div
    key={exp._id}
    className="project-card"
  >
    <h4>{exp.role}</h4>

    <p>
      <strong>{exp.company}</strong>
    </p>

    <p>{exp.type}</p>

    <p>
      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
    </p>

    <div className="card-actions">

      <button
        className="delete-btn"
        onClick={() =>
          handleExperienceDelete(exp._id)
        }
      >
        🗑️ Delete
      </button>

    </div>

  </div>
))
    )
}
    </div>
  );
};

export default AdminDashboard;