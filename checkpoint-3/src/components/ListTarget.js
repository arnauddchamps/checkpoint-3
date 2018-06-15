// Component ListTarget display a list of targets

import React from "react";
import { ListGroup } from "reactstrap";
import Target from "./Target";
// import Targer from "./Target";
// import Target from "./Target";

const ListTarget = ({ targets, change }) => (
  <ListGroup>
    {targets.map((target, index) => (
      <Target
        key={target.id}
        {...target}
        change={() => change(target.status)}
      />
    ))}
  </ListGroup>
);

export default ListTarget;
