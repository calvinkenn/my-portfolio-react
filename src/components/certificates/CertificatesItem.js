import React from "react";

import Card from "react-bootstrap/Card";

const CertificatesItem = (props) => {
  return (
    <Card className="p-2" style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.img} />
    </Card>
  );
};

export default CertificatesItem;
