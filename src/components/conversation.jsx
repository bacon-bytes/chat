import React, { Component } from "react";

const Conversation = ({ messages }) => {
  let message;
  if (messages.length > 0) {
    message = messages.map((message, index) => (
      <div key={index}>
        {messages[index].userName} : {messages[index].message}
      </div>
    ));
  } else message = <div>There don't seem to be any mesages yet.</div>;

  return (
    <div>
      {message}
      <ul></ul>
    </div>
  );
};

export default Conversation;
