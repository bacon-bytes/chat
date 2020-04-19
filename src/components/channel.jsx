import React, { Component } from "react";
import "../chat.css";

const Channel = ({ channels, handleChannelChange, currentChannel }) => {
  let title;
  if (channels.length > 0) {
    title = channels.map((id, index) => {
      if (currentChannel === channels[index].id) {
        return (
          <div className="menuSelected">
            <div
              key={index}
              className="channel"
              onClick={() => handleChannelChange(channels[index].id)}
            >
              # {channels[index].name}
            </div>
          </div>
        );
      } else {
        return (
          <div className="menuHover">
            <div
              key={index}
              className="channel"
              onClick={() => handleChannelChange(channels[index].id)}
            >
              # {channels[index].name}
            </div>
          </div>
        );
      }
    });
  }
  return <div>{title}</div>;
};

export default Channel;
