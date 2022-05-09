import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/khadijabarhoumiCV.pdf";
import { AiOutlineDownload,AiFillBank } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/KhadijaBarhoumi/MyPortfolio/blob/main/src/Assets/khadijabarhoumiCV.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid >
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Link to="/" className="link"  >
        <h1 style={{ fontSize: "2.2em" }}>
        <AiFillBank />
            &nbsp;Home
         </h1>
        </Link>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", display :"flex"}}>
          <Document file={pdf} style={{ justifyContent: "center"}}>
            <Page pageNumber={1}  scale={width > 767 ? 1.7 : 0.5}/>
            <Page pageNumber={2} scale={width > 767 ? 1.7 : 0.5} />
          </Document>
        </Row>

        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
          <AiOutlineDownload />
          &nbsp;Download CV
          </Button>
          
        
      </Container>
    </div>
  );
}

export default Resume;