import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import TextToolkit from "../../Assets/Projects/TextToolkit.png";
import chatsApp from "../../Assets/Projects/chatsApp.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png";
import airline from "../../Assets/Projects/Airline.jpg";
import geospatial from "../../Assets/Projects/Geospatial.jpg";
import Calculator from "../../Assets/Projects/Calculator.jpg";
import "./Projects.css"; // Import the CSS file
import TechieNotes from "../../Assets/Projects/TechieNotes.png";

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

        <h2 className="project-subheading android">Android Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={chatsApp}
              title="ChatsApp"
              description="Android app offering free messaging, story sharing, photo sending, group chatting, and the ability to react with emojis. Available on Mi App Store."
              projectId="ChatsApp"
              projectType="android-app"
              ghLink="https://github.com/jnvshubham7/ChatsApp"
              demoLink="https://global.app.mi.com/details?lo=IN&la=en_US&id=com.example.chatsapp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={expenseTracker}
              title="Expense Tracker"
              description="Android app for tracking daily expenses, helping users manage their finances effortlessly. Available on Mi App Store."
              projectId="Expense_Tracker"
              projectType="android-app"
              ghLink="https://github.com/jnvshubham7/Expense_Tracker"
              demoLink="https://global.app.mi.com/details?lo=IN&la=en_US&id=com.example.expensetracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={airline}
              title="Airline Booking System"
              description="A simple airline booking system built with Java, XML, and Android Studio, featuring Firebase authentication. Users can search flights, view bookings, and administrators can manage flight and airport data."
              projectId="Airline_Booking_System"
              projectType="android-app"
              ghLink="https://github.com/jnvshubham7/Airline_Booking_System"
              demoLink="https://github.com/jnvshubham7/Airline_Booking_System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={geospatial}
              title="Ground Truth Collector"
              description="This Android app enables easy collection of ground truth data using GPS. Users can classify locations (e.g., vegetation, water, built areas) and save GPS coordinates with class names to a local CSV file. The app also displays the collected data for easy review and analysis."
              projectId="Geospatial-Data-Analysis-of-Prayagraj"
              projectType="android-app"
              ghLink="https://github.com/jnvshubham7/Geospatial-Data-Analysis-of-Prayagraj/tree/main/Android%20App"
              demoLink="https://github.com/jnvshubham7/Geospatial-Data-Analysis-of-Prayagraj/tree/main/Android%20App"
            />
          </Col>
        </Row>

        <h2 className="project-subheading web">Web Projects</h2>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card web-card">
            <ProjectCards
              imgPath={TechieNotes}
              title="Techie Notes"
              description="Techie Notes | Articles, Tutorials, and Notes on Technology & Development"
              projectId="TechieNotes"
              projectType="web-app"
              ghLink="https://techienotes.vercel.app/"
              demoLink="https://techienotes.vercel.app/"
            />
          </Col>




          <Col md={4} className="project-card web-card">
            <ProjectCards
              imgPath={TextToolkit}
              title="TextToolkit"
              description="Text manipulation and analysis tool. Features include text transformation, clipboard convenience, text clearing, titlecase conversion, speech synthesis, and space management. Free to use and browser compatible."
              projectId="TextToolkit"
              projectType="web-app"
              ghLink="https://github.com/jnvshubham7/TextToolkit"
              demoLink="https://texttoolkit.vercel.app/"
            />
          </Col>
        </Row>

        <h2 className="project-subheading react-native">React Native Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Calculator} // Add an appropriate image path for the project
              title="Unit Converter and Calculator App"
              description="This React Native application serves as a unit converter and calculator, allowing users to perform conversions between various units of measurement and basic arithmetic calculations. Features include unit conversion, basic calculator, and dark/light mode toggle."
              projectId="Calculator-Native-App"
              projectType="android-app" // Keeping the same styling as Android projects
              ghLink="https://github.com/jnvshubham7/Calculator-Native-App"
              demoLink="https://github.com/jnvshubham7/Calculator-Native-App"
            />
          </Col>
          {/* Add more React Native projects here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
