import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Kumar Bhokta</span> from{" "}
            <span className="purple">Deoghar, Jharkhand, India.</span>
            <br />
            I am a graduate of <span className="purple">IIIT Allahabad</span>, where I earned my degree in Information Technology.
            <br />
            As a software development enthusiast, I have experience working with{" "}
            <span className="purple">C++, Java</span>, and am familiar with technologies like{" "}
            <span className="purple">Python, JavaScript, React, and Flutter</span>.
            <br />
            <br />
            <strong>Experience:</strong>
            <ul>
              <li>
                <ImPointRight style={{ color: "purple" }} /> Developed enterprise-level features at{" "}
                <span className="purple">Tandem</span>, focusing on Flutter-based applications with real-time vehicle tracking.
              </li>
              <li>
                <ImPointRight style={{ color: "purple" }} /> Created <a href="https://global.app.mi.com/details?lo=IN&la=en_US&id=com.example.chatsapp" target="_blank" rel="noopener noreferrer" className="purple">ChatsApp</a> – an Android app available on the Mi App Store with 115+ users.
              </li>
              <li>
                <ImPointRight style={{ color: "purple" }} /> Developed <a href="https://texttoolkit.vercel.app/" target="_blank" rel="noopener noreferrer" className="purple">TextToolkit</a> – a web application for text manipulation and analysis.
              </li>
            </ul>
          
        
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
