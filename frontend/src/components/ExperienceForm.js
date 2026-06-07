import React, { useState } from "react";
import { addExperience } from "../utils/api";
import { useNavigate } from "react-router-dom";

const ExperienceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    type: "Internship",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      skills: JSON.stringify(
        formData.skills
          .split(",")
          .map((s) => s.trim())
      ),
    };

    try {
      await addExperience(payload);

      alert("Experience Added");

      navigate("/secret-admin/dashboard");
    } catch (err) {
      console.log(err);
      alert("Failed");
    }
  };

  return (
    <div className="project-form">

      <h2>Add Experience</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option>
            Internship
          </option>

          <option>
            Virtual Internship
          </option>

          <option>
            Job Simulation
          </option>

          <option>
            Freelance
          </option>

          <option>
            Full Time
          </option>
        </select>

        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="current"
            checked={formData.current}
            onChange={handleChange}
          />

          Currently Working
        </label>

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Python, SQL, Power BI"
          value={formData.skills}
          onChange={handleChange}
        />

        <button type="submit">
          Add Experience
        </button>

      </form>
    </div>
  );
};

export default ExperienceForm;