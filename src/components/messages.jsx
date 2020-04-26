import React, { Component } from "react";
import Conversation from "./conversation";
import ChatInput from "./chatInput";
import { getMessages } from "../services/fakeMessages";
import "../chat.css";

class Messages extends Component {
  handleSubmit = (message) => {
    this.props.addNewMessage(message);
  };

  render() {
    return (
      <div className="chatBox">
        <div className="messagesWrapper">
          <div className="messages">
            <Conversation messages={this.props.messages} />
          </div>
        </div>
        <div className="chatInput">
          <ChatInput handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Messages;
