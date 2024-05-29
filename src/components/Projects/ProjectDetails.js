import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';
import './ProjectDetails.css';

function ProjectDetails() {
  const { projectId } = useParams();
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/jnvshubham7/${projectId}/main/README.md`);
        const text = await response.text();
        setReadmeContent(text);
      } catch (error) {
        console.error('Error fetching README:', error);
      }
    };

    fetchReadme();
  }, [projectId]);

  useEffect(() => {
    hljs.highlightAll();
  }, [readmeContent]);

  return (
    <Container fluid className="project-details-section">
      <Container>
        <h1 className="project-heading">
           <strong className="purple"> Project Details</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <div className="markdown-body">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readmeContent}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetails;
