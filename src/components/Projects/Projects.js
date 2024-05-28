import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textUtils from "../../Assets/Projects/textUtils.png"; // Add your image paths here
import chatsApp from "../../Assets/Projects/chatsApp.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png";
import airline from "../../Assets/Projects/Airline.jpg";
import effe from "../../Assets/Projects/Effe.jpg";
import geospatial from "../../Assets/Projects/Geospatial.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
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
              projectType="web-app" // Set the project type
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
              projectType="android-app" // Set the project type
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
              projectType="android-app" // Set the project type
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airline}
              isBlog={false}
              title="Airline Booking System"
              description="A simple airline booking system built with Java, XML, and Android Studio, featuring Firebase authentication. Users can search flights, view bookings, and administrators can manage flight and airport data."
              ghLink="https://github.com/jnvshubham7/Airline_Booking_System"
              demoLink="https://github.com/jnvshubham7/Airline_Booking_System"
              projectType="android-app" // Set the project type
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geospatial}
              isBlog={false}
              title="Ground Truth Collector"
              description="This Android app enables easy collection of ground truth data using GPS. Users can classify locations (e.g., vegetation, water, built areas) and save GPS coordinates with class names to a local CSV file. The app also displays the collected data for easy review and analysis."
              ghLink="https://github.com/jnvshubham7/Geospatial-Data-Analysis-of-Prayagraj/tree/main/Android%20App"
              demoLink="https://github.com/jnvshubham7/Geospatial-Data-Analysis-of-Prayagraj/tree/main/Android%20App"
              projectType="android-app" // Set the project type
            />
          </Col>

       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
