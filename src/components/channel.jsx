import React, { Component } from "react";

const Channel = ({ channels }) => {
  let title;
  if (channels.length > 0) {
    title = channels.map((id, index) => (
      <div key={index}># {channels[index].name}</div>
    ));
  }
  return <div>{title}</div>;
};

export default Channel;
