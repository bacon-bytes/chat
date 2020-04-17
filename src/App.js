import React, { Component } from "react";
import Chat from "./components/chat";
import Teams from "./components/teams";
import Channels from "./components/channels";
import "./chat.css";

class App extends Component {
  state = {
    user: {
      userId: "5b21ca3eeb7f6fbccd471813",
      userName: "Sean",
      icon: "",
      teams: ["5b21ca3eeb7f6fbccd470000"],
    },
    currentTeam: {
      id: "5b21ca3eeb7f6fbccd470000",
    },
  };

  render() {
    return (
      <React.Fragment>
        <div className="appContainer">
          <Teams className="teamsContainer" teams={this.state.user.teams} />
          <Channels
            className="channelsContainer"
            currentTeamId={this.state.currentTeam.id}
            userName={this.state.user.userName}
            userId={this.state.user.userId}
          />
          <Chat className="chatContainer" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
