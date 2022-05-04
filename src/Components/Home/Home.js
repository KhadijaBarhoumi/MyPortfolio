import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Logo from "./Logo";
import Techstack from "../Skils";
import Projects from "../Projects/Projects";


function Home() {
  return (
    <section >
    
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <h1  className="heading-logo">
        <span className="wave" role="img" aria-labelledby="wave"><strong className="main-name">{" <"} </strong></span>
                <span className="wave" role="img" aria-labelledby="wave" >
              <div style={{ textAlign: "left" }}>
              <Logo />
            </div>
                </span>
                <span className="wave" role="img" aria-labelledby="wave"><strong className="main-name"> {" "}{" / "}{" "}{" >"}</strong></span>
              </h1>
              

          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 ,color: "#D4D3DC"}} className="heading" >
              Hello{" "}

              </h1>

              <h1 className="heading-name"  style={{color: "#D4D3DC"}}>
            Welcome to
                <strong className="main-name"> My portfolio!</strong>
              </h1>
              <h1 className="heading-name"  style={{color: "#D4D3DC"}}>
              My name is
                <strong className="main-name"> KHADIJA BARHOUMI</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <div  style={{ backgroundColor: "#B0B9A8"}}>
      <h1 className="project-heading" >
          Professional <strong className="purple">Skillset </strong>
        </h1>
       
      <Techstack />
     
      </div>
  
      <div  >
     
        <Projects />
        
      </div>
      <Row>
      
      </Row>
    </section>
  );
}

export default Home;
