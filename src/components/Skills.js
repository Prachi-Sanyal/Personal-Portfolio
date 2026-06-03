import React from "react";

import languages from "../assets/img/Untitled design (1).png";
import frameworks from "../assets/img/Untitled design (2).png";
import database from "../assets/img/Untitled design (3).png";
import api from "../assets/img/Untitled design (4).png";
import devops from "../assets/img/Untitled design (5).png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SkillCard = ({ title, skills, image }) => (
  <div
    className="item"
    style={{
      background: "linear-gradient(135deg, #a30f94, #512bd4)",
      borderRadius: "30px",
      padding: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      minHeight: "250px",
      color: "#fff",
    }}
  >
    <div style={{ flex: "1 1 60%", minWidth: "260px" }}>
      <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>{title}</h3>
      <p style={{ whiteSpace: "pre-line", fontSize: "16px", lineHeight: "1.6" }}>{skills}</p>
    </div>
    <div style={{ flex: "1 1 35%", minWidth: "200px", textAlign: "center" }}>
      <img
        src={image}
        alt="Skill visual"
        style={{
          width:"170px",
          maxWidth: "100%",
          maxHeight: "200px",
        
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const skillData = [
    {
      title: "Languages & Technologies",
      skills: `
PHP, Python
HTML, CSS, JavaScript`,
      image: languages,
    },
    {
      title: "Web Frameworks",
      skills: `Django, Bootstrap
React, Express`,
      image: frameworks,
    },
    {
      title: "Databases",
      skills: `MySQL, MongoDB`,
      image: database,
    },
    {
      title: "API & Microservices",
      skills: `RESTful APIs
Microservices (basic understanding)`,
      image: api,
    },
    {
      title: "DevOps & Tools",
      skills: `Basic Docker, Git, GitHub, Postman, VS Code, XAMPP
Learning: AWS Cloud, CI/CD Pipeline`,
      image: devops,
    },
    
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills" style={{ padding: "60px 0", backgroundColor: "#0f0f0f" }}>
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div className="skill-bx" 
        style={{ color: "#fff", textAlign: "center", marginBottom: "0" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Skills</h2>
          <p style={{ color: "#bbb", maxWidth: "800px", margin: "10px auto 40px auto" }}>
            Here's a snapshot of my technical and soft skills aligned with full-stack and software development roles.
          </p>

          <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={false}
          keyBoardControl={true}
          className="skill-slider"
        >
          {skillData.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} image={category.image} />
          ))}
        </Carousel>

        </div>
        {/*
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={false}
          keyBoardControl={true}
          className="skill-slider"
        >
          {skillData.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} image={category.image} />
          ))}
        </Carousel>
        */}
      </div>
    </section>
  );
};



{/*
  import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
*/}