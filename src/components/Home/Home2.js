import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
    I fell in love with programming and have honed my skills over the years.
    <br />
    <br />
    I am proficient in
    <i>
      <b className="purple"> C, C++, Python, and Java, </b>
    </i>
    with a solid understanding of data structures and algorithms, object-oriented programming, and operating systems.
    <br />
    <br />
    My expertise includes building web applications using
    <i>
      <b className="purple"> React, JavaScript, HTML, CSS, </b>
    </i>
    and
    <i>
      <b className="purple"> Bootstrap. </b>
    </i>
    I developed and deployed the TextUtils web application for text manipulation and analysis.
    <br />
    <br />
    I am also skilled in creating Android applications using
    <i>
      <b className="purple"> Java and Android Studio. </b>
    </i>
    Notable projects include ChatsApp and Expense Tracker, both available on the Mi App Store, incorporating
    <i>
      <b className="purple"> Firebase </b>
    </i>
    for backend services.
    <br />
    <br />
    My experience extends to database management systems like
    <i>
      <b className="purple"> Firebase Database </b>
    </i>
    and
    <i>
      <b className="purple"> Realm. </b>
    </i>
    <br />
    <br />
    I am proficient with development tools such as
    <i>
      <b className="purple"> Git, Visual Studio Code, </b>
    </i>
    and
    <i>
      <b className="purple"> Android Studio. </b>
    </i>
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
