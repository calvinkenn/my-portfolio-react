import React from "react";
import ProjectItem from "./ProjectItem";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import web1 from "../../assets/projects/web/1.png";
import web2 from "../../assets/projects/web/2.png";
import web3 from "../../assets/projects/web/3.png";
import web4 from "../../assets/projects/web/4.png";
import web5 from "../../assets/projects/web/5.png";
import web6 from "../../assets/projects/web/6.png";

import bouncy1 from "../../assets/projects/bouncy/1.jpg";
import bouncy2 from "../../assets/projects/bouncy/2.jpg";
import bouncy3 from "../../assets/projects/bouncy/3.jpg";
import bouncy4 from "../../assets/projects/bouncy/4.jpg";
import bouncy5 from "../../assets/projects/bouncy/5.jpg";

import bokal1 from "../../assets/projects/bokal/1.jpg";
import bokal2 from "../../assets/projects/bokal/2.jpg";
import bokal3 from "../../assets/projects/bokal/3.jpg";
import bokal4 from "../../assets/projects/bokal/4.jpg";
import bokal5 from "../../assets/projects/bokal/5.jpg";

import puzzle1 from "../../assets/projects/puzzle/1.jpg";
import puzzle2 from "../../assets/projects/puzzle/2.jpg";
import puzzle3 from "../../assets/projects/puzzle/3.jpg";
import puzzle4 from "../../assets/projects/puzzle/4.jpg";
import puzzle5 from "../../assets/projects/puzzle/5.jpg";

import color1 from "../../assets/projects/color/1.jpg";
import color2 from "../../assets/projects/color/2.jpg";
import color3 from "../../assets/projects/color/3.jpg";
import color4 from "../../assets/projects/color/4.jpg";
import color5 from "../../assets/projects/color/5.jpg";

const projects = [
  {
    id: 0,
    img: [web1, web2, web3, web4, web5, web6],
    title: "Faculty Management System (Web)",
    description:
      "This is a group project that is built using MERN. My role is React and some Backend programming.",
    year: "2022",
  },
  {
    id: 1,
    img: [bouncy1, bouncy2, bouncy3, bouncy4, bouncy5],
    title: "Bouncy Head",
    description: "This game is made using Unity3D.",
    year: "2019",
  },
  {
    id: 2,
    img: [bokal1, bokal2, bokal3, bokal4, bokal5],
    title: "Bokal Knight",
    description: "This game is made using Unity3D.",
    year: "2020",
  },
  {
    id: 3,
    img: [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5],
    title: "Puzzle Switch",
    description: "This game is made using Unity3D.",
    year: "2020",
  },
  {
    id: 4,
    img: [color1, color2, color3, color4, color5],
    title: "Color Bump",
    description: "This game is made using Unity3D.",
    year: "2020",
  },
];

const ProjectList = () => {
  return (
    <Container fluid className="p-3">
      <Row className="row justify-content-center">
        {projects?.map((item) => (
          <Col className="p-3 card-group" sm="auto" key={item.id}>
            <ProjectItem
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              year={item.year}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
