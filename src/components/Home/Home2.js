import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Shubham Kumar Bhokta, a passionate software developer and a graduate from the 
              <i>
                <b className="purple"> Indian Institute of Information Technology, Allahabad.</b>
              </i>
              <br />
              <br />Over the years, I've honed my skills in 
              <i>
                <b className="purple"> C++, Java, Python, and Dart, </b>
              </i>
              along with a deep understanding of data structures, algorithms, and object-oriented programming.
              <br />
              <br />
              My journey in software development has led me to create impactful projects such as 
              <i>
                <b className="purple"> ChatsApp,</b>
              </i>
              an Android app with over 115 users, and 
              <i>
                <b className="purple"> TextToolkit,</b>
              </i>
              a web-based text manipulation tool.
              <br />
              <br />
              Recently, I completed a software development internship at 
              <i>
                <b className="purple"> Tandem,</b>
              </i>
              where I developed and enhanced features for an enterprise-level Flutter-based application, focusing on document management and real-time vehicle tracking.
              <br />
              <br />
              My technical expertise extends to 
              <i>
                <b className="purple"> Flutter, React, Firebase, and Google Maps,</b>
              </i>
              enabling me to build robust and scalable applications.
              <br />
              <br />
              Beyond technical skills, I am an avid problem solver, with a keen interest in 
              <i>
                <b className="purple"> Android and Web Development,</b>
              </i>
              striving to create efficient and user-friendly applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jnvshubham7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/jnvshubham7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-bhokta-97113116b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shubhamkumarbhokta7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ShubhamKumarBhokta/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
