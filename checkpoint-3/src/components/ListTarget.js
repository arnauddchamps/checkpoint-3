// Component ListTarget display a list of targets

import React from "react";
import { ListGroup } from "reactstrap";
import Target from "./Target";
// import Targer from "./Target";
// import Target from "./Target";

const ListTarget = ({ targets }) => (
  <ListGroup>
    {targets.map((target, index) => <Target key={index} {...target} />)}
  </ListGroup>
);

export default ListTarget;
