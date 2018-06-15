//Component Target display one target

import React from "react";
import { ListGroupItem } from "reactstrap";

const Target = ({ name, status, picture }) => (
  <ListGroupItem>
    <h3>{name}</h3>
    <img src={picture} alt={name} />
    <h3>{status}</h3>
  </ListGroupItem>
);

export default Target;
