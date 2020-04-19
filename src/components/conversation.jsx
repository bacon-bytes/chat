import React, { Component } from "react";
import "../chat.css";
import moment from "moment";
import GetUserIcon from "./userIcon";
import UserIcon from "./userIcon";

const Conversation = ({ messages }) => {
  let message;
  if (messages.length > 0) {
    message = messages.map((message, index) => (
      <div key={index} className="messageBox">
        {/* <div
          className="messageUserIcon"
           style={{ backgroundImage: 'url("./profileIcons/man-1-100.jpg")' }}
        >
        </div> */}
        <UserIcon userId={messages[index].userId} />
        <div>
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
      </div>
    ));
  } else message = <div>There don't seem to be any mesages yet.</div>;

  return <div>{message}</div>;
};

export default Conversation;
