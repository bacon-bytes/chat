import React, { Component } from "react";
import "../chat.css";
import moment from "moment";

const Conversation = ({ messages }) => {
  let message;
  if (messages.length > 0) {
    message = messages.map((message, index) => (
      <div key={index} className="messageBox">
        <div className="messageUserIcon"></div>
        <div>
          <div className="messageUserName">{messages[index].userName} </div>
          <div className="messageTimeStamp">
            {moment(messages[index].timeStamp).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </div>
        </div>
        <div className="message"> {messages[index].message}</div>
      </div>
    ));
  } else message = <div>There don't seem to be any mesages yet.</div>;

  return <div>{message}</div>;
};

export default Conversation;
