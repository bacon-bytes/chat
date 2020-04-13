import React from "react";
import Chat from "./components/chat";
import "./chat.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="appContainer">
          <div className="teamsContainer"></div>
          <div className="channelsContainer"></div>
          <Chat className="chatContainer" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
