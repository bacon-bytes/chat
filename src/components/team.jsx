import React, { Component } from "react";
import { getTeams } from "../services/fakeTeams";
import "../chat.css";
import TeamIcon from "./teamIcon";

const Team = ({ teams, handleTeamChange, currentTeamId }) => {
  let team;
  let teamNames = [];
  for (let i = 0; i < teams.length; i++) {
    let teamName = getTeams().find((team) => team.id === teams[i]);
    teamNames.push(teamName.name);
  }
  team = teams.map((id, index) => {
    return (
      <div key={index}>
        <TeamIcon
          id={teams[index]}
          handleTeamChange={handleTeamChange}
          currentTeamId={currentTeamId}
        />
      </div>
    );
  });
  return <div>{team}</div>;
};

export default Team;
