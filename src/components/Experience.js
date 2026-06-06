import { useEffect, useState } from "react";
import { getExperiences } from "../utils/api";
import "./Experience.css";

export const Experience = () => {

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences().then(setExperiences);
  }, []);

  if (experiences.length === 0) return null;

  return (
    <section className="experience-section">

      <div className="container">

        <h2>Experience</h2>

        {experiences.map((exp) => (

          <div
            className="experience-card"
            key={exp._id}
          >

            <h3>{exp.role}</h3>

            <h4>{exp.company}</h4>

            <span>
              {exp.startDate} - {exp.current ? "Present" : exp.endDate}
            </span>

            <p>{exp.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};