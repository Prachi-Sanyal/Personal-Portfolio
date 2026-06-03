import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
//import "./ProjectCard.css";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const isVideo = project.bannerImage?.endsWith(".mp4");

  return (
    <Col size={12} sm={6} md={4} onClick={() => navigate(`/project/${project._id}`)} className="project-card">
      <div className="proj-imgbx">
        {isVideo ? (
          <video
            src={project.bannerImage}
            muted
            loop
            playsInline
            onMouseEnter={e => e.target.play()}
            onMouseLeave={e => e.target.pause()}
            className="banner-media"
          />
        ) : (
          <img src={project.bannerImage} alt={project.name} className="banner-media" />
        )}
        <div className="proj-txtx">
          <h4>{project.name}</h4>
        </div>
      </div>
    </Col>
  );
};
