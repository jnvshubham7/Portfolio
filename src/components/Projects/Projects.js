import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textUtils from "../../Assets/Projects/textUtils.png"; // Add your image paths here
import chatsApp from "../../Assets/Projects/chatsApp.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtils}
              isBlog={false}
              title="TextUtils"
              description="Text manipulation and analysis tool. Features include text transformation, clipboard convenience, text clearing, titlecase conversion, speech synthesis, and space management. Free to use and browser compatible."
              ghLink="https://github.com/jnvshubham7/TextUtils"
              demoLink="https://jnvshubham7.github.io/TextUtils/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatsApp}
              isBlog={false}
              title="ChatsApp"
              description="Android app offering free messaging, story sharing, photo sending, group chatting, and the ability to react with emojis. Available on Mi App Store."
              ghLink="https://github.com/jnvshubham7/ChatsApp"
              demoLink="https://global.app.mi.com/details?lo=IN&la=en_US&id=com.example.chatsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Android app for tracking daily expenses, helping users manage their finances effortlessly. Available on Mi App Store."
              ghLink="https://github.com/jnvshubham7/Expense_Tracker"
              demoLink="https://global.app.mi.com/details?lo=IN&la=en_US&id=com.example.expensetracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
