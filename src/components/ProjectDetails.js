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
      <h2 className="mt-4 mb-2">{project.name}</h2>
      <p className="mb-3">{project.description}</p>
      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary mb-4">
          View Live Project
        </a>
      )}

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
                <Col md={6}><p>{desc}</p></Col>
              </>
            ) : (
              <>
                <Col md={6}><p>{desc}</p></Col>
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
    </Container>
  );
};

export default ProjectDetail;
