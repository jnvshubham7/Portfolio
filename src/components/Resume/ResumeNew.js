import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../Particle";
import Loading from "./Loading";  // Importing the Loading component

// PDF.js setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode (optional)

  useEffect(() => {
    setWidth(window.innerWidth);
    fetchPdf();
  }, []);

  const fetchPdf = async () => {
    try {
      console.log("Fetching PDF...");
      const response = await fetch('http://localhost:5000/api/get-pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      } else {
        console.error('Failed to fetch PDF:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching PDF:', error);
    } finally {
      setIsLoading(false);  // Stop loading spinner after fetching
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="http://localhost:5000/api/get-pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {isLoading ? (
            // Show the Loading component while PDF is loading
            <Loading isDarkMode={isDarkMode} />
          ) : pdfUrl ? (
            // Display the PDF once loaded
            <Document file={pdfUrl} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : (
            <p className="text-center mt-5">Failed to load PDF.</p>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="http://localhost:5000/api/get-pdf"
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
