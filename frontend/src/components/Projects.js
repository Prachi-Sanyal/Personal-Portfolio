import { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "../utils/api"; // make sure this uses /api/projects/all
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import './ProjectCard.css';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .finally(() => setLoading(false));
  }, []);

  const filterByCategory = (category) =>
    projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());

 if (loading) {
    return (
      <section className="project" id="projects">
        <Container>
          <div className="text-center py-5">
            <h4>Loading Projects...</h4>
            <p>
              Fetching portfolio projects and analytics dashboards.
              Please wait a moment.
            </p>
          </div>
        </Container>
      </section>
    );
  }


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
<p>
A collection of software development and data analytics projects
built using Python, SQL, Power BI, Tableau, React, PHP, and
modern development tools.
</p>                <Tab.Container id="projects-tabs" defaultActiveKey="Data Analytics">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                    <Nav.Item><Nav.Link eventKey="Data Analytics">Data Analytics</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="Development">Development</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="AI/ML">AI/ML</Nav.Link></Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="Data Analytics">
                      <Row>
                        {filterByCategory("Data Analytics").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Development">
                      <Row>
                        {filterByCategory("Development").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="AI/ML">
  <div className="coming-soon">
    <h4>AI/ML Projects Coming Soon</h4>
    <p>
      Currently building projects in Machine Learning and expanding
      my skills in AI technologies.
    </p>
  </div>
</Tab.Pane>

                   {/*
                    <Tab.Pane eventKey="AI/ML">
                      <Row>
                        {filterByCategory("AI/ML").map((project, index) => (
                          <ProjectCard key={index} project={project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    */}

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
