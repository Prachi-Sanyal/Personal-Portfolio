/**
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Full Stack Developer", "Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Prachi, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Full Stack Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Full-Stack Developer and aspiring Software Engineer with hands-on experience in MERN, PHP, and Python. Passionate about building scalable web solutions and currently expanding into cloud and DevOps practices.

</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


**/

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download, Award } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import resumePdf from "../assets/Prachi_Resume.pdf";

export const Banner = () => {
  
 


  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
  window.open(resumePdf, "_blank");
};

  

  return (
    <section className="banner" id="home">
      {/* Animated Background Elements */}
      <div className="banner-bg-elements">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <Container>
        <Row className="align-items-center banner-content">
          <Col xs={12} lg={6} className="banner-text-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">
                    <span className="tagline-icon">📈</span>
Data Analytics • Business Intelligence • Web Development                  </span>
                  
                  {/*<h4>
  Turning Data Into Insights &
  <br />
  Ideas Into Applications
</h4>
*/}

<h1 className="hero-name">
  Prachi Sanyal
</h1>

                  {/*<h1>
                    Hi, I'm <span className="highlight-name">Prachi Sanyal</span>
                  </h1>*/}
                {/*}
                  <div className="role-container">
                    <span className="role-prefix">I'm a </span>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                      <span className="cursor">|</span>
                    </span>
                  </div>
*/}
                  <p className="banner-description">
  MCA student with a foundation in web development and a growing focus on
  <span className="highlight"> Data Analytics</span>. Experienced in building
  web applications and creating data-driven insights using
  <span className="highlight"> Python, SQL, Excel, Power BI</span> and
  <span className="highlight"> Tableau</span>. Currently expanding my skills in
  cloud technologies while working towards machine learning.
</p>

                  <div className="banner-cta-group">
                    <button className="cta-primary" onClick={scrollToProjects}>
                      View Projects <ArrowRightCircle size={20} />
                    </button>
                    <button
  className="cta-secondary"
  onClick={handleResumeDownload}
>
  <Download size={18}/>
  Download Resume
</button>
                    
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} lg={6} className="banner-visual-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  {/* Analytics-Themed SVG Illustration */}
                  <div className="analytics-illustration">
                    <svg viewBox="0 0 400 400" className="analytics-svg">
                      {/* Background Circle */}
                      <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#AA367C" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#4A2FBD" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#4A2FBD" />
                          <stop offset="100%" stopColor="#AA367C" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Main Dashboard Frame */}
                      <rect x="50" y="50" width="300" height="200" rx="15" 
                        fill="rgba(255,255,255,0.1)" 
                        stroke="url(#purpleGradient)" 
                        strokeWidth="2"
                        className="dashboard-frame" />
                      
                      {/* Bar Chart */}
                      <g className="bar-chart">
                        <rect x="80" y="180" width="30" height="50" rx="5" fill="url(#barGradient)" className="bar bar-1" />
                        <rect x="120" y="150" width="30" height="80" rx="5" fill="url(#barGradient)" className="bar bar-2" />
                        <rect x="160" y="120" width="30" height="110" rx="5" fill="url(#barGradient)" className="bar bar-3" />
                        <rect x="200" y="100" width="30" height="130" rx="5" fill="url(#barGradient)" className="bar bar-4" />
                        <rect x="240" y="80" width="30" height="150" rx="5" fill="url(#barGradient)" className="bar bar-5" />
                      </g>

                      {/* Trend Line */}
                      <path d="M80 180 Q140 140 200 100 T320 70" 
                        stroke="#AA367C" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        filter="url(#glow)"
                        className="trend-line" />
                      
                      {/* Data Points */}
                      <circle cx="80" cy="180" r="6" fill="#fff" className="data-point" />
                      <circle cx="160" cy="140" r="6" fill="#fff" className="data-point" />
                      <circle cx="240" cy="90" r="6" fill="#fff" className="data-point" />
                      <circle cx="320" cy="70" r="6" fill="#fff" className="data-point" />

                      {/* Pie Chart */}
                      <g transform="translate(320, 180)">
                        <circle r="40" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <path d="M0,0 L0,-40 A40,40 0 0,1 34.6,20 Z" fill="#AA367C" className="pie-slice" />
                        <path d="M0,0 L34.6,20 A40,40 0 0,1 -34.6,20 Z" fill="#4A2FBD" className="pie-slice" />
                        <path d="M0,0 L-34.6,20 A40,40 0 0,1 0,-40 Z" fill="#7B2F9E" className="pie-slice" />
                      </g>

                      {/* Code Brackets */}
                      <text x="60" y="290" fill="#AA367C" fontSize="40" fontFamily="monospace" className="code-bracket">{"<"}</text>
                      <text x="90" y="290" fill="#fff" fontSize="20" fontFamily="monospace" className="code-text">data</text>
                      <text x="140" y="290" fill="#AA367C" fontSize="40" fontFamily="monospace" className="code-bracket">{"/>"}</text>

                      {/* Floating Elements */}
                      <g className="floating-elements">
                        <rect x="280" y="270" width="80" height="25" rx="5" fill="rgba(74,47,189,0.3)" />
                        <text x="295" y="288" fill="#fff" fontSize="12" fontFamily="monospace">Python</text>
                        
                        <rect x="200" y="300" width="60" height="25" rx="5" fill="rgba(170,54,124,0.3)" />
                        <text x="215" y="318" fill="#fff" fontSize="12" fontFamily="monospace">SQL</text>

                        <rect x="270" y="320" width="90" height="25" rx="5" fill="rgba(123,47,158,0.3)" />
                        <text x="280" y="338" fill="#fff" fontSize="12" fontFamily="monospace">Power BI</text>
                      </g>

                      {/* Decorative Circles */}
                      <circle cx="350" cy="60" r="8" fill="#AA367C" opacity="0.6" className="deco-circle" />
                      <circle cx="40" cy="120" r="5" fill="#4A2FBD" opacity="0.6" className="deco-circle" />
                      <circle cx="380" cy="250" r="6" fill="#7B2F9E" opacity="0.6" className="deco-circle" />
                    </svg>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        
      </Container>
    </section>
  );
};