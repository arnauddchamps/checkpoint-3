//Component KillZone display KillZone

import React from "react";
import { Container } from "reactstrap";
import ListTarget from "./ListTarget";

const targets = [
  {
    name: "Leia Organa",
    status: "alive",
    picture:
      "https://am22.akamaized.net/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
  },
  {
    name: "C-3PO",
    status: "alive",
    picture: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
  },
  {
    name: "Biggs Darklighter",
    status: "dead",
    picture: "https://starwars-visualguide.com/assets/img/characters/9.jpg"
  }
];

const KillZone = () => (
  <Container>
    <ListTarget targets={targets} />
  </Container>
);

export default KillZone;
