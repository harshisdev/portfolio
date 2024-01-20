import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Name } from "../../../constant";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="py-3">
          <Row>
            <Col className="text-center">
              Copyright © 2023 - {(new Date().getFullYear())}· All Rights Reserved · {Name}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
