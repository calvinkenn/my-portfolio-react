import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const ProjectItem = (props) => {
  return (
    <Card className="p-2" style={{ width: "25rem" }}>
      <Carousel variant="dark">
        {props.img?.map((item, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={item} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.year}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectItem;
