import React from "react";
import { getTeams } from "../services/fakeTeams";

const TeamIcon = ({ id, handleTeamChange }) => {
  let iconUrl = "";
  let teamName = "";
  let team;
  const teams = getTeams();
  let teamHasIcon = false;

  for (let i = 0; i < teams.length; i++) {
    if (teams[i].id === id) {
      iconUrl = teams[i].icon;
      teamName = teams[i].name;
      team = teams[i];
      if (iconUrl.length > 4) {
        teamHasIcon = true;
      }
    }
  }
  if (teamHasIcon) {
    return (
      <div
        className="teamIconWithIcon teamHover"
        style={{ backgroundImage: `url(${iconUrl})` }}
        onClick={() => handleTeamChange(team)}
      ></div>
    );
  } else {
    return (
      <div
        className="teamIconNoIcon overflowEllipsis"
        onClick={() => handleTeamChange(team)}
      >
        {teamName}{" "}
      </div>
    );
  }
};

export default TeamIcon;
