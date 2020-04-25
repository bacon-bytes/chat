import React, { Component } from "react";
import "../chat.css";
import moment from "moment";
import UserIcon from "./userIcon";

const Conversation = ({ messages }) => {
  let message;
  const sameDay = "h:mm a";
  const anotherDay = "MMMM Do YYYY";

  if (messages.length > 0) {
    message = messages.map((message, index) => (
      <div key={index} className="messageBox">
        <UserIcon id={messages[index].id} />
        <div>
          <div>
            <div className="messageUserName">{messages[index].userName} </div>
            <div className="messageTimeStamp">
              {checkDate(messages[index].timeStamp) &&
                moment(messages[index].timeStamp).format(sameDay)}
              {!checkDate(messages[index].timeStamp) &&
                moment(messages[index].timeStamp).format(anotherDay)}
            </div>
          </div>
          <div className="message"> {messages[index].message}</div>
        </div>
      </div>
    ));
  } else message = <div>There don't seem to be any mesages yet.</div>;

  return <div>{message}</div>;
};

const checkDate = (messageTimeStamp) => {
  let dateNow = moment(Date.now()).format("YYYY-MM-DD");
  let messageDate = moment(messageTimeStamp).format("YYYY-MM-DD");
  const isDateSame = moment(dateNow).isSame(messageDate);
  return isDateSame;
};

export default Conversation;
