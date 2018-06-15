//Component KillZone display KillZone

import React, { Component } from "react";
import { Container } from "reactstrap";
import ListTarget from "./ListTarget";

class KillZone extends Component {
  constructor() {
    super();
    //state initial
    this.state = {
      targets: [
        {
          id: 1,
          name: "Leia Organa",
          status: "alive",
          picture:
            "https://am22.akamaized.net/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
        },
        {
          id: 2,
          name: "C-3PO",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/2.jpg"
        },
        {
          id: 3,
          name: "Biggs Darklighter",
          status: "dead",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/9.jpg"
        }
      ]
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(targetStatus) {
    console.log(targetStatus);
    this.setState(prevState => ({
      status: "dead"
    }));
  }
  render() {
    return (
      <Container>
        <ListTarget targets={this.state.targets} change={this.changeStatus} />
      </Container>
    );
  }
}

export default KillZone;
