import React, { Component } from "react";
import "../chat.css";
import Team from "./team";

class Teams extends Component {
  render() {
    const { teams, handleTeamChange } = this.props;
    return (
      <div className="teams">
        <Team teams={teams} handleTeamChange={handleTeamChange} />
      </div>
    );
  }
}

export default Teams;
