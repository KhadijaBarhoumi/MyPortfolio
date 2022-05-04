import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsCodeSlash,BsGithub } from "react-icons/bs";


function ProjectCards(props) {
  
  return (
    <div> 
    <Card className="project-card-view">
   
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      <Card.Body>
        <Card.Title style={{ color:"#606C5A"}}><h4>{props.title}</h4></Card.Title>
        <Card.Text style={{ textAlign: "justify"  }}>
        <h4>
        <BsCodeSlash/>
          {props.description}
          </h4>
        </Card.Text>
        
        <Button variant="primary" href={props.link} target="_blank">
        <BsGithub /> 
        {" "} {" "} View Project
      </Button>
      </Card.Body>
    </Card>
    </div>
  );
}
export default ProjectCards;
