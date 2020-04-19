import React, { Component } from "react";
import { getMessages } from "./services/fakeMessages";
import { getTeams } from "./services/fakeTeams";
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
    teamName: "",
    channels: [],
    currentChannel: "",
    members: [],
    messages: [],
  };

  componentWillMount() {
    this.setTeam();
  }

  componentDidMount() {
    this.setMessagesToChannel(this.state.currentChannel);
  }

  setTeam = () => {
    let team = getTeams().find((x) => x.id === this.state.currentTeam.id);
    let teamName = team.name;
    let channels = team.channels;
    let members = team.members;
    let currentChannel = channels[0].id;
    this.setState({ teamName, channels, members, currentChannel });
  };

  handleChannelChange = (channel) => {
    let currentChannel = channel;
    this.setState({ currentChannel });
    this.setMessagesToChannel(currentChannel);
  };

  setMessagesToChannel = (channel) => {
    let messages = this.filterMessagesByChannel(getMessages(), channel);
    this.setState({ messages });
  };

  filterMessagesByChannel(messages, channel) {
    return messages.filter((message) => message.channelId === channel);
  }

  addNewMessage = (message) => {
    let messages = [...this.state.messages];
    const newMessage = this.postNewMessage(message);
    messages.push(newMessage);
    this.setState({ messages });
  };

  postNewMessage = (message) => {
    return {
      userId: this.state.user.userId,
      userName: this.state.user.userName,
      timeStamp: Date.now(),
      message: message,
      channelId: this.state.currentChannel,
    };
  };

  render() {
    const {
      user,
      currentTeam,
      currentChannel,
      teamName,
      channels,
      members,
      messages,
    } = this.state;
    return (
      <React.Fragment>
        <div className="appContainer">
          <Teams className="teamsContainer" teams={user.teams} />
          <Channels
            className="channelsContainer"
            currentTeamId={currentTeam.id}
            userName={user.userName}
            userId={user.userId}
            teamName={teamName}
            channels={channels}
            currentChannel={currentChannel}
            members={members}
            handleChannelChange={this.handleChannelChange}
          />
          <Chat
            className="chatContainer"
            currentChannel={currentChannel}
            messages={messages}
            user={user}
            addNewMessage={this.addNewMessage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
