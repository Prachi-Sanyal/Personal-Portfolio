import React, { useState } from "react";
import { addCertification } from "../utils/api";
import { useNavigate } from "react-router-dom";

const CertificationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    issueDate: "",
    credentialUrl: "",
  });

  const [certificateImage, setCertificateImage] =
    useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("title", formData.title);
    fd.append("issuer", formData.issuer);
    fd.append("issueDate", formData.issueDate);
    fd.append(
      "credentialUrl",
      formData.credentialUrl
    );

    if (certificateImage) {
      fd.append(
        "certificateImage",
        certificateImage
      );
    }

    try {
      await addCertification(fd);

      alert("Certification Added");

      navigate("/secret-admin/dashboard");
    } catch (err) {
      console.log(err);
      alert("Failed");
    }
  };

  return (
    <div className="project-form">
      <h2>Add Certification</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Certification Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="issuer"
          placeholder="Issuer"
          value={formData.issuer}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="issueDate"
          placeholder="Issue Date"
          value={formData.issueDate}
          onChange={handleChange}
        />

        <input
          type="url"
          name="credentialUrl"
          placeholder="Credential URL"
          value={formData.credentialUrl}
          onChange={handleChange}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setCertificateImage(
              e.target.files[0]
            )
          }
        />

        <button type="submit">
          Add Certification
        </button>
      </form>
    </div>
  );
};

export default CertificationForm;