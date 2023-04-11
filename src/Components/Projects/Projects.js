import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import EduLearn from "../../Assets/Projects/EduLearn.PNG";
import fastColi from "../../Assets/Projects/fastColi.PNG";
import Movie from "../../Assets/Projects/Movie.PNG";
import Folie_Cosmetic1 from "../../Assets/Projects/Folie_Cosmetic1.PNG";
import weather from "../../Assets/Projects/weather.PNG";
import docplaner from "../../Assets/Projects/docplaner.PNG";

function Projects() {
  return (
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white", textAlign: "center", fontSize: "2.1em" }}>
        Here are a few projects I've worked on recently.
      </p>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={docplaner}
            title="Docplanner Group"
            description=" HTML - CSS "
            link="https://github.com/KhadijaBarhoumi/Docplanner_Group"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Folie_Cosmetic1}
            title="Folie Cosmetic"
            description=" HTML - JS - CSS  -  bootstrap"
            link="https://github.com/KhadijaBarhoumi/Folie_Cosmetic"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Movie}
            title="MovieApp"
            description=" ReactJs - HTML - JS -  CSS  - Redux - React-router-dom"
            link="https://github.com/KhadijaBarhoumi/MovieApp"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={weather}
            title="WeatherApp"
            description=" ReactJs - HTML - JS -  CSS  - Redux - React-router-dom - Node.js"
            link="https://github.com/KhadijaBarhoumi/weather-app"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={EduLearn}
            title="EduLearn"
            description=" ReactJs - HTML - JS -  CSS  -  Redux - React-router-dom  -
        Node.js - Express.js - MongoDB "
            link="https://github.com/KhadijaBarhoumi/EduLearn"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={fastColi}
            title="FastColi"
            description=" PHP
        - JQuery
        - HTML 
        - JS 
        - CSS"
        link="https://github.com/KhadijaBarhoumi/Fast-Colis"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
