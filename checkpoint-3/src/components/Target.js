//Component Target display one target

import React from "react";
import { ListGroupItem, Button, Row, Col } from "reactstrap";

const Target = ({ name, status, picture, change }) => (
  <ListGroupItem>
    <Row>
      <Col xs="3">
        <h3>{name}</h3>
      </Col>
      <Col xs="3">
        <img className="img-fluid" src={picture} alt={name} />
      </Col>
      <Col xs="3">
        <h3>{status}</h3>
      </Col>
      <Col xs="3">
        <Button onClick={change}>KILL</Button>
      </Col>
    </Row>
  </ListGroupItem>
);

export default Target;
