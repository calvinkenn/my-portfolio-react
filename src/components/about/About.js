import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

import pic from "../../assets/profile/me.jpg";
import "./About.css";
import Skills from "./components/Skills";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <div className="profile-pic">
            <img src={pic} alt="profile" />
          </div>
        </Col>
        <Col md={8}>
          <div className="profile-content pt-3">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>About me</Accordion.Header>
                <Accordion.Body>
                  Hi, I'm Calvin! This July, 2022, I will graduate with a
                  Bachelor of Science in Information Technology from Bulacan
                  State University. I'm interested in pursuing a career in web
                  or game development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                  <Container fluid>
                    <Row className="pb-3">
                      <Col md={4}>Bulacan State University</Col>
                      <Col md={6}>BSIT Major in Web and Mobile Development</Col>
                      <Col md={2}>2018-2022</Col>
                    </Row>
                    <Row>
                      <Col md={4}>St. Amatiel Technological Institute</Col>
                      <Col md={6}>
                        Associates Degree in Computer Programming
                      </Col>
                      <Col md={2}>2015-2017</Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Work Experience</Accordion.Header>
                <Accordion.Body>
                  <Container fluid>
                    <Row className="pb-3">
                      <Col md={6}>Accenture ATLP Program</Col>
                      <Col md={4}>OJT</Col>
                      <Col md={2}>2021-2022</Col>
                    </Row>
                    <Row>
                      <Col md={6}>Infinite Global Solutions</Col>
                      <Col md={4}>Virtual Assistant</Col>
                      <Col md={2}>2017-2018</Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Known Language and Tools</Accordion.Header>
                <Accordion.Body>
                  <Container fluid>
                    <Row>
                      <Col md={12}>
                        <Skills />
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Contact Information</Accordion.Header>
                <Accordion.Body>
                  <Container fluid>
                    <Row>
                      <Col md={12}>Email: calvink.palma@gmail.com</Col>
                      <Col md={12}>Phone: 09334235465</Col>
                      <Col md={12}>
                        Git: <a href="https://github.com/calvinkenn" target="blank">My Git</a>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
