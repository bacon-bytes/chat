import React, { Component } from "react";
import DirectMessage from "./directMessage";
import UserIcon from "./userIcon";
import Channel from "./channel";
import "../chat.css";

class Channels extends Component {
  render() {
    const {
      userName,
      id,
      teamName,
      channels,
      members,
      handleChannelChange,
      currentChannel,
      directMessageChannels,
    } = this.props;
    return (
      <React.Fragment>
        <div className="channelsWrapper">
          <div className="channels">
            <div className="channelHeader overflowEllipsis">
              <b> {teamName}</b>
            </div>
            <div className="availableChannels overflowEllipsis">
              <div className="allCapTitle channel">Channels</div>
              <Channel
                channels={channels}
                handleChannelChange={handleChannelChange}
                currentChannel={currentChannel}
              />
              <div className="directMessages">
                <div className="allCapTitle channel">direct messages</div>
                <DirectMessage
                  members={members}
                  id={id}
                  directMessageChannels={directMessageChannels}
                  handleChannelChange={handleChannelChange}
                  currentChannel={currentChannel}
                />
              </div>
            </div>
            <div className="channelFooterWrapper">
              <div className="channelFooter">
                <UserIcon id={id} />
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
