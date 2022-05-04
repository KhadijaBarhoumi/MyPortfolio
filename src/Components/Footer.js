import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by khadija Barhoumi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
               <a
                  href="https://github.com/KhadijaBarhoumi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
               <a
                 href="https://www.linkedin.com/in/barhoumi-khadija-86a447226/"
                 target="_blank"
                 rel="noreferrer"
                 className="icon-colour  home-social-icons"
                > 
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
