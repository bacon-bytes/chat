import React from "react";
import { getTeams } from "../services/fakeTeams";

const TeamIcon = ({ id, handleTeamChange, currentTeamId }) => {
  let iconUrl = "";
  let teamName = "";
  let team;
  const teams = getTeams();
  let teamHasIcon = false;
  let teamClassName;
  let wrapperClassName;

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
  if (team.id === currentTeamId) {
    wrapperClassName = "teamSelected";
  }
  if (teamHasIcon) {
    teamClassName = "teamIconWithIcon teamHover";
  } else {
    teamClassName = "teamIconNoIcon  teamHover overflowEllipsis";
  }

  return (
    <div>
      <div className={wrapperClassName}></div>
      <div
        className={teamClassName}
        style={{ backgroundImage: `url(${iconUrl})` }}
        onClick={() => handleTeamChange(team)}
      >
        {!teamHasIcon && teamName}
      </div>
    </div>
  );
};

export default TeamIcon;
