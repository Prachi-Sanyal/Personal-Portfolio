import { Col, Row } from "react-bootstrap";
import resumePdf from "../assets/Prachi_Resume.pdf";


export const Newsletter = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917490882159?text=Hi%20there,%20I'm%20interested%20in%20working%20with%20you!", "_blank");
  };

  const handleResumeDownload = () => {
    window.open(resumePdf, "_blank"); // Replace with actual resume link
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Let’s Build Something Together</h3>
            <p>
              I’m open to freelance and full-time job roles.
              <br />
              Feel free to reach out for collaboration or just to connect.
            </p>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={handleWhatsAppClick}>
                💼 Hire Me</button>
              <button onClick={handleResumeDownload} className="ms-3">📄 Download Resume</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};



{/*
  import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}


*/}