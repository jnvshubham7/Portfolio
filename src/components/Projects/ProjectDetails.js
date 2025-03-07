import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import "./ProjectDetails.css";
import { Octokit } from "@octokit/rest";

function NeonGlowProject() {
  const { projectId } = useParams();
  const [readmeContent, setReadmeContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN, // Ensure this token has the 'repo' scope
      });

      try {
        const { data: repoData } = await octokit.repos.get({
          owner: "jnvshubham7",
          repo: projectId,
        });

        if (repoData) {
          const { data } = await octokit.repos.getContent({
            owner: "jnvshubham7",
            repo: projectId,
            path: "README.md",
          });
          // print full repo link
          console.log(data.download_url);
          const content = atob(data.content);
          setReadmeContent(content);
        }
      } catch (error) {
        if (error.status === 404) {
          setError("Repository or README not found.");
        } else {
          setError("An error occurred while fetching the README.");
        }
        console.error("Error fetching README:", error);
        console.error("Error details:", error.response);
      }
    };

    fetchReadme();
  }, [projectId]);

  useEffect(() => {
    hljs.highlightAll();
  }, [readmeContent]);

  return (
    <Container fluid className="NeonGlowProject">
      <Container>
        <h1 className="NeonGlowProject-heading">
          <strong className="purple">Project Details</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="NeonGlowProject-card">
            <div className="NeonGlowProject-markdown">
              {error ? (
                <p>{error}</p>
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {readmeContent}
                </ReactMarkdown>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NeonGlowProject;
