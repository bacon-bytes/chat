import React, { Component } from "react";
import "../chat.css";

class Channels extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="channelsWrapper">
          <div className="channels">
            <div className="channelHeader overflowEllipsis">
              <b> Team Title</b>
            </div>

            <div className="availableChannels overflowEllipsis">
              <div className="allCapTitle">Channels</div>
              <div># channel</div>
              <div># channel</div>
              <div># channel</div>
              <div className="directMessages">
                <div className="allCapTitle">direct messages</div>
                <div className="contact"> contact</div>
                <div className="contact"> contact</div>
                <div className="contact"> contact</div>
              </div>
            </div>

            <div className="channelFooterWrapper">
              <div className="channelFooter">
                <div className="channelFooterUserIcon"></div>
                <div className="footerUserName overflowEllipsis">
                  <b>USER NAME THAT HAPPENS TO BE TOO LONG</b>
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
