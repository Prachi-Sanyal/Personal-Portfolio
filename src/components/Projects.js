import { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "../utils/api"; // make sure this uses /api/projects/all
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const filterByCategory = (category) =>
    projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Explore all projects categorized by platform.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="web">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                    <Nav.Item><Nav.Link eventKey="web">Web App</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="desktop">Desktop App</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="wordpress">WordPress</Nav.Link></Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="web">
                      <Row>
                        {filterByCategory("Web").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="desktop">
                      <Row>
                        {filterByCategory("Desktop").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wordpress">
                      <Row>
                        {filterByCategory("WordPress").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
