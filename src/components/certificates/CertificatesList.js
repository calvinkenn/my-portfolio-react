import React from "react";
import CertificatesItem from "./CertificatesItem";

import git from "../../assets/certificates/git.png";
import interview from "../../assets/certificates/interview.png";
import reactZ from "../../assets/certificates/react.png";
import vs from "../../assets/certificates/vs.png";
import web from "../../assets/certificates/web.png";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const certImage = [
  {
    id: 0,
    cert: git,
  },
  {
    id: 1,
    cert: interview,
  },
  {
    id: 2,
    cert: reactZ,
  },
  {
    id: 3,
    cert: vs,
  },
  {
    id: 4,
    cert: web,
  },
];

const CertificatesList = () => {
  return (
    <Container fluid className="p-3">
      <Row className="row justify-content-center">
        {certImage?.map((item) => (
          <Col className="p-3" sm="auto">
            <CertificatesItem img={item.cert} key={item.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CertificatesList;
