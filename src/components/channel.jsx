import React, { Component } from "react";
import "../chat.css";

const Channel = ({ channels, handleChannelChange, currentChannel }) => {
  let title;
  let channelClassName = "";
  if (channels.length > 0) {
    title = channels.map((id, index) => {
      if (currentChannel === channels[index].id) {
        channelClassName = "menuSelected";
      } else {
        channelClassName = "menuHover";
      }
      return (
        <div key={index} className={channelClassName}>
          <div
            className="channel"
            onClick={() => handleChannelChange(channels[index].id)}
          >
            # {channels[index].name}
          </div>
        </div>
      );
    });
  }
  return <div>{title}</div>;
};

export default Channel;
