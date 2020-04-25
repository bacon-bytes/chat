import React, { Component } from "react";
import "../chat.css";
import Team from "./team";

class Teams extends Component {
  render() {
    const { teams, handleTeamChange, currentTeamId } = this.props;
    return (
      <div className="teams">
        <Team
          teams={teams}
          handleTeamChange={handleTeamChange}
          currentTeamId={currentTeamId}
        />
      </div>
    );
  }
}

export default Teams;
