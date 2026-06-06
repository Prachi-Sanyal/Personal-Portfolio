import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./ProjectCard.css";
import { BsArrowUpRightSquare } from "react-icons/bs";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Col md={4} sm={6} xs={12} className="project-card">
      <div
        className="project-card-box"
        onClick={() => navigate(`/project/${project._id}`)}
      >
        <img
          src={project.bannerImage}
          alt={project.title}
          className="banner-media"
        />

        <div className="project-content">
          <div className="project-text">
            <h4>{project.title}</h4>
          </div>

          <div className="project-icon">
            <BsArrowUpRightSquare />
          </div>
        </div>
      </div>
    </Col>
  );
};