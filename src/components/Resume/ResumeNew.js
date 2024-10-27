import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    fetchPdf(); // Fetch the PDF when the component mounts
  }, []);

  const fetchPdf = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/get-pdf'); // Update the URL accordingly
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } else {
        console.error('Failed to fetch PDF:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="http://localhost:5000/api/get-pdf" // Update the URL for download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {pdfUrl && (
            <Document file={pdfUrl} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="http://localhost:5000/api/get-pdf" // Update the URL for download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
