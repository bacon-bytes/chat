import React, { Component } from "react";
import { getMessages } from "./services/fakeMessages";
import { getTeams } from "./services/fakeTeams";
import Chat from "./components/chat";
import Teams from "./components/teams";
import Channels from "./components/channels";
import "./chat.css";
import DirectMessage from "./components/directMessage";

class App extends Component {
  state = {
    user: {
      id: "5b21ca3eeb7f6fbccd471813",
      userName: "Sean",
      icon: "",
      teams: ["5b21ca3eeb7f6fbccd470000", "5b21ca3eeb7f6fbccd470001"],
    },
    currentTeam: {
      id: "5b21ca3eeb7f6fbccd470000",
    },
    teamName: "",
    channels: [],
    directMessageChannels: [],
    currentChannel: "",
    members: [],
    messages: [],
  };

  componentWillMount() {
    this.setTeam(getTeams().find((x) => x.id === this.state.currentTeam.id));
  }

  componentDidMount() {
    this.setMessagesToChannel(this.state.currentChannel);
  }

  setTeam = (team) => {
    let teamName = team.name;
    let channels = team.channels;
    let members = team.members;
    let currentChannel = channels[0].id;
    let directMessageChannels = this.filterMyDirectMessages(team);
    this.setState({
      teamName,
      channels,
      members,
      currentChannel,
      directMessageChannels,
    });
  };

  filterMyDirectMessages = (team) => {
    let directMessages = team.directMessageChannels;
    let myMessages = [];
    for (let i = 0; i < directMessages.length; i++) {
      if (directMessages[i].members.includes(this.state.user.id)) {
        myMessages.push(directMessages[i]);
      }
    }
    return myMessages;
  };

  handleChannelChange = (channel) => {
    let currentChannel = channel;
    this.setState({ currentChannel });
    this.setMessagesToChannel(currentChannel);
  };

  handleTeamChange = (team) => {
    let currentTeam = team;
    this.setState({ currentTeam });
    this.setTeam(team);
    this.setMessagesToChannel(team.channels[0].id);
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
      id: this.state.user.id,
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
      directMessageChannels,
    } = this.state;
    return (
      <React.Fragment>
        <div className="appContainer">
          <Teams
            className="teamsContainer"
            teams={user.teams}
            handleTeamChange={this.handleTeamChange}
          />
          <Channels
            className="channelsContainer"
            currentTeamId={currentTeam.id}
            userName={user.userName}
            id={user.id}
            teamName={teamName}
            channels={channels}
            currentChannel={currentChannel}
            members={members}
            handleChannelChange={this.handleChannelChange}
            directMessageChannels={directMessageChannels}
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
