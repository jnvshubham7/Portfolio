import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
     <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Shubham Kumar Bhokta</span> from <span className="purple">Deoghar, Jharkhand, India.</span>
      <br />
      I am currently an undergraduate student at the Indian Institute of Information Technology, Allahabad.
      <br />
      I am experienced in <span className="purple">C, C++, Python, and Java</span>, and familiar with <span className="purple">JavaScript, React, HTML, and CSS</span>.
      <br />
      <br />
      Apart from coding, here are a few activities that I love to do:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight style={{ color: "purple" }} /> Playing Chess
      </li>
      <li className="about-activity">
        <ImPointRight style={{ color: "purple" }} /> Travelling
      </li>
    </ul>
    <p style={{ color: "rgb(155 126 172)" }}>
      "The only way to do great work is to love what you do."
    </p>
    <footer className="blockquote-footer">Steve Jobs</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
