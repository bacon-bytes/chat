import React, { Component } from "react";
import "../chat.css";
import { getTeams } from "../services/fakeTeams";
import Channel from "./channel";
import DirectMessage from "./directMessage";
import UserIcon from "./userIcon";

class Channels extends Component {
  state = { name: "", channels: [], members: [] };

  componentDidMount() {
    this.setTeam();
  }

  setTeam = () => {
    let team = getTeams().find((x) => x.id === this.props.currentTeamId);
    let name = team.name;
    let channels = team.channels;
    let members = team.members;

    this.setState({ name, channels, members });
  };

  render() {
    const { name, channels, members } = this.state;
    const { userName, userId } = this.props;
    return (
      <React.Fragment>
        <div className="channelsWrapper">
          <div className="channels">
            <div className="channelHeader overflowEllipsis">
              <b> {name}</b>
            </div>
            <div className="availableChannels overflowEllipsis">
              <div className="allCapTitle">Channels</div>
              <Channel channels={channels} />
              <div className="directMessages">
                <div className="allCapTitle">direct messages</div>
                <DirectMessage members={members} userId={userId} />
              </div>
            </div>
            <div className="channelFooterWrapper">
              <div className="channelFooter">
                {/* <div className="channelFooterUserIcon"></div> */}
                <UserIcon userId={userId} />
                <div className="footerUserName overflowEllipsis">
                  <b>{userName}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Channels;
