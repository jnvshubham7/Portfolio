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
      onClick={() => (window.location.href = `/projects/${props.projectId}`)}
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
        <Button
          variant="primary"
          onClick={() =>
            (window.location.href = `/projects/${props.projectId}`)
          }
        >
          View Details
        </Button>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
