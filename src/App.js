import React from "react";
import Chat from "./components/chat";
import Teams from "./components/teams";
import Channels from "./components/channels";
import "./chat.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="appContainer">
          <Teams className="teamsContainer" />
          <Channels className="channelsContainer" />
          <Chat className="chatContainer" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
