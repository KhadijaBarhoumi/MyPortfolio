import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight} from "react-icons/im";
import { GrResume } from "react-icons/gr";
import { Link } from "react-router-dom";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={2} className="myAvtar">
        <Tilt>
          <img src={Logo} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
          <Col md={8} className="home-about-description">
          
            <h1 style={{ fontSize: "2.6em"  }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              I am open to learning new technologies &nbsp;
              <i>
                <b className="purple">the field of web development. </b> 
                
                <b className="purple">
                  
                </b>
              </i>
              <br />
              Extremely motivated to constantly develop  &nbsp;
              <i>
                <b className="purple">my skills and grow professionally. </b> 
                <b className="purple"> 
                </b>
              </i>
              <br />
              I am confident in my ability to  &nbsp;
              <i>
                <b className="purple">come up with interesting ideas. </b> 
                
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library 
                </b>
              </i>
            </p>
          </Col>
          
          <Col md={8} className="home-about-description2">
            <h1 style={{ fontSize: "2.6em" }}>
            Know Who <span className="purple"> I'M </span> 
            </h1>
            <p className="home-about-body2">
            Hi Everyone, I am
            <span className="purple"> Khadija Barhoumi </span>
            from <span className="purple"> Gafsa, Tunisia.</span>
            <br />I am a Junior Full Stack JS Developer .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            </p>
           <ul>
              <li className="about-activity">
              <ImPointRight style={{ color: "#B0B9A8"}}/> Design/Editing
              of
              Pictures
              </li>
              <li className="about-activity">
              <ImPointRight style={{ color: "#B0B9A8"}}/> Electronic Creation
              </li>
              <li className="about-activity">
              <ImPointRight  style={{ color: "#B0B9A8"}}/>Manufacturing
              art
              </li>
              <li className="about-activity">
              <ImPointRight  style={{ color: "#B0B9A8"}}/> Travelling
              </li>
              <li className="about-activity">
              <ImPointRight style={{ color: "#B0B9A8"}} /> Drawing
              </li>
              <li className="about-activity"> 
              <ImPointRight style={{ color: "#B0B9A8"}}/> Aesthetic
              </li>
           </ul>
          </Col>
          <Col md={2} className="myAvtar2">
          <Tilt>
            <img src={Logo} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
        </Row>
        <Col md={8} className="home-about-description2">
        <h1 style={{ fontSize: "2.6em" }}>
        Do you Want to know
        <span className="purple">  more</span>?
        </h1>
        <Link to="/resume" className="link" >
        <h1 style={{ fontSize: "2.2em" }}>
        See my resume&nbsp;
        <GrResume style={{color:"white"}}/>
        </h1>
        </Link>
        </Col> 
      </Container>
    </Container>
  );
}
export default Home2;
