import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // Import the CSS file

function ProjectCards(props) {
  return (
    <Card
      className={`project-card-view ${props.projectType}`}
      onClick={() => (window.location.href = `/projects/${props.projectId}`)} // Card click navigates to project details
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Button for viewing details with stopPropagation */}
        <Button
          variant="primary"
          onClick={(e) => {
            e.stopPropagation(); // Prevents card click event
            window.location.href = `/projects/${props.projectId}`; // Navigate to project details
          }}
        >
          View Details
        </Button>

        {/* GitHub Link */}
        <Button variant="primary" href={props.ghLink} target="_blank" onClick={(e) => e.stopPropagation()}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Demo link if available */}
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" onClick={(e) => e.stopPropagation()}>
            <CgWebsite /> &nbsp;
            {"App/Web Link"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
