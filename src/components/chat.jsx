import React, { Component } from "react";
import Conversation from "./conversation";
import ChatInput from "./chatInput";
import { getMessages } from "../services/fakeMessages";

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
    const timeStamp = Date.now();
    const newMessage = {
      userId: "5b21ca3eeb7f6fbccd471813",
      userName: "Sean",
      timeStamp: timeStamp,
      message: message,
      conversationId: "1000",
    };
    messages.push(newMessage);
    this.setState({ messages });
  };

  render() {
    return (
      <div>
        <Conversation messages={this.state.messages} />
        <ChatInput handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Chat;
