import React from "react";

import Card from "react-bootstrap/Card";

const SkillsItem = (props) => {
  return (
    <Card className="p-2" style={{ width: "4rem" }}>
      <Card.Img variant="top" src={props.link} />
    </Card>
  );
};

export default SkillsItem;
