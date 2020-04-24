import React, { Component } from "react";
import "../chat.css";

const Channel = ({ channels, handleChannelChange, currentChannel }) => {
  let title;
  if (channels.length > 0) {
    title = channels.map((id, index) => {
      if (currentChannel === channels[index].id) {
        return (
          <div key={index} className="menuSelected">
            <div
              className="channel"
              onClick={() => handleChannelChange(channels[index].id)}
            >
              # {channels[index].name}
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="menuHover">
            <div
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
