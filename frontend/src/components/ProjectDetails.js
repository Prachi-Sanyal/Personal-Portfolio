import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectById } from "../utils/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ProjectDetail.css";

const isVideo = (url) => url?.endsWith(".mp4");

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id).then(data => setProject(data));
  }, [id]);

  if (!project) return <p style={{ textAlign: "center" }}>Loading project...</p>;

  return (
    <Container className="project-detail">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mt-4">← Back</Button>
      <h2 className="mt-4 mb-2">{project.title}</h2>
<p className="detail-description">
  {project.detailedDescription}
</p>  
<div className="tech-stack">
  {project.technologies?.map((tech, index) => (
    <span key={index} className="tech-badge">
      {tech}
    </span>
  ))}
</div>

    <div className="project-links">

  {project.githubUrl && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline-light"
    >
      GitHub
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      Live Demo
    </a>
  )}

</div>
{/*
      {project.screenshots?.map((url, index) => {
        const isEven = index % 2 === 0;
        const desc = project.screenshotDescriptions?.[index] || "";

        return (
          <Row key={index} className="mb-5 align-items-center">
            {isEven ? (
              <>
                <Col md={6}>
                  {isVideo(url) ? (
                    <video src={url} controls className="screenshot-media" />
                  ) : (
                    <img src={url} alt={`Screenshot ${index + 1}`} className="screenshot-media" />
                  )}
                </Col>
                <Col md={6}><p className="screenshot-description">{desc}</p></Col>
              </>
            ) : (
              <>
                <Col md={6}><p className="screenshot-description">{desc}</p></Col>
                <Col md={6}>
                  {isVideo(url) ? (
                    <video src={url} controls className="screenshot-media" />
                  ) : (
                    <img src={url} alt={`Screenshot ${index + 1}`} className="screenshot-media" />
                  )}
                </Col>
              </>
            )}
          </Row>
        );
      })}

      */}
{project.screenshots?.map((url, index) => {
  const desc = project.screenshotDescriptions?.[index] || "";
  const isEven = index % 2 === 0;

  return (
    <Row key={index} className="mb-5 align-items-center">

      {isEven ? (
        <>
          {/* Desktop & Mobile: Image First */}
          <Col md={6} xs={12}>
            {isVideo(url) ? (
              <video src={url} controls className="screenshot-media" />
            ) : (
              <img
                src={url}
                alt={`Screenshot ${index + 1}`}
                className="screenshot-media"
              />
            )}
          </Col>

          <Col md={6} xs={12}>
            <p className="screenshot-description">
              {desc}
            </p>
          </Col>
        </>
      ) : (
        <>
          {/* Desktop: Description Left */}
          {/* Mobile: Description moves below image */}
          <Col
            md={6}
            xs={12}
            className="order-2 order-md-1"
          >
            <p className="screenshot-description">
              {desc}
            </p>
          </Col>

          <Col
            md={6}
            xs={12}
            className="order-1 order-md-2"
          >
            {isVideo(url) ? (
              <video src={url} controls className="screenshot-media" />
            ) : (
              <img
                src={url}
                alt={`Screenshot ${index + 1}`}
                className="screenshot-media"
              />
            )}
          </Col>
        </>
      )}

    </Row>
  );
})}

    </Container>
  );
};

export default ProjectDetail;
