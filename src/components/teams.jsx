import React, { Component } from "react";
import "../chat.css";
import Team from "./team";

class Teams extends Component {
  state = {};

  render() {
    return (
      <div className="teams">
        <div className="teamIcon overflowEllipsis">
          <b>TEAM</b>
        </div>
      </div>
    );
  }
}

export default Teams;
