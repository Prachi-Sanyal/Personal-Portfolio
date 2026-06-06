import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/mail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
  href="https://www.linkedin.com/in/prachi-sanyal"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={navIcon1} alt="LinkedIn Icon" />
</a>

<a
  href="https://github.com/Prachi-Sanyal"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={navIcon2} alt="GitHub Icon" />
</a>

<a
  href="mailto:sanyalprachi1004@gmail.com"
>
  <img src={navIcon3} alt="Email Icon" />
</a>

            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
