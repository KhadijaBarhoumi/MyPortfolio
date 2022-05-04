import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJsBadge,
  DiReact,
  DiMongodb,
  DiGit,
  DiNetbeans,
  DiLinux,
  DiJqueryUiLogo
} from "react-icons/di";
import {
  SiAdobephotoshop,
  SiJava,
  SiLinkedin,
  SiMysql,
  SiPhp,
  SiPinterest
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { GoMarkGithub,GoMail } from "react-icons/go";
import { TiCss3,TiHtml5 } from "react-icons/ti";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center",margin:"50px" , backgroundColor: "#606C5A"}}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> 
        <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> C++ </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
        <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Javascript </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoNodejs/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Nodejs </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> React </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPhp/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> PHP </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJava/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Java </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      < DiJqueryUiLogo/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> JQuery </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Mongodb </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Github </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TiCss3/>
      <h1 style={{color:"#B0B9A8",fontSize:"20px"}}> Css </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TiHtml5/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Html </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Mysql </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiLinux/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Linux </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNetbeans/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Netbeans </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop/>
      <h1 style={{color:"#B0B9A8" ,fontSize:"20px"}}> Photoshop </h1>
      </Col>
      <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KhadijaBarhoumi"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                <Col  className="tech-icons">
                <GoMarkGithub/>
                </Col>
                
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/barhoumi-khadija-86a447226/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour "
                >
                <Col  className="tech-icons">
                <SiLinkedin/>
                </Col>
                  
                </a>
              </li>
            </ul>
          </Col>
    </Row>
  );
}

export default Techstack;
