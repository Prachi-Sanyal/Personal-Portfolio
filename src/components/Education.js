import "./Education.css";
import { FaMedal } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">

        <h2>Education</h2>

        {/* MCA */}

        <div className="education-card">

          <div className="education-header">
            <PiGraduationCapFill className="edu-icon" />
            <h3>Master of Computer Applications (MCA)</h3>
          </div>

          <h5>Sikkim Manipal University (Distance Education)<br></br><span>2025 - Present</span>
</h5>
          <p>
            Currently pursuing MCA with a focus on Software Development,
            Data Analytics, Python, SQL, Business Intelligence,
            and Modern Web Technologies.
          </p>

          

        </div>

        {/* BCA */}

        <div className="education-card">

          <div className="education-header">
            <PiGraduationCapFill className="edu-icon" />
            <h3>Bachelor of Computer Applications (BCA)</h3>
          </div>

          <h5>The Maharaja Sayajirao University of Baroda<br></br><span>2022 - 2025</span></h5>

          <p>
            Graduated with a CGPA of <strong>9.2/10</strong>.
            Built academic and personal projects in Full-Stack Development,
            PHP, Python, Database Management Systems, and Web Technologies.
          </p>

          <div className="achievement-badge">
            <FaMedal />
            <span>Gold Medalist</span>
          </div>

          

        </div>

      </div>
    </section>
  );
};