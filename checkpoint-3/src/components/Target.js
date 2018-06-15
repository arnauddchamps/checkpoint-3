//Component Target display one target

import React from "react";
import { ListGroupItem, Button } from "reactstrap";

const Target = ({ name, status, picture }) => (
  <ListGroupItem>
    <h3>{name}</h3>
    <img src={picture} alt={name} />
    <h3>{status}</h3>
    <Button />
  </ListGroupItem>
);

export default Target;
