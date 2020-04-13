import React, { Component } from "react";
import Conversation from "./conversation";
import ChatInput from "./chatInput";
import { getMessages } from "../services/fakeMessages";
import "../chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    const messages = getMessages();
    this.setState({ messages: messages });
  }

  handleSubmit = (message) => {
    let messages = [...this.state.messages];
    const newMessage = this.returnNewMessage(message);
    messages.push(newMessage);
    this.setState({ messages });
  };

  returnNewMessage = (message) => {
    return {
      userId: "5b21ca3eeb7f6fbccd471813",
      userName: "Sean",
      timeStamp: Date.now(),
      message: message,
      conversationId: "1000",
    };
  };

  render() {
    return (
      <div className="chatBox">
        <div className="messages">
          <Conversation messages={this.state.messages} />
        </div>
        <div className="chatInput">
          <ChatInput handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Chat;
