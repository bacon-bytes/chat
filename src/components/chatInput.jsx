import React, { Component } from "react";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.message);
    this.setState({ message: "" });
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.onSubmit(e);
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Message"
          aria-label="Message"
          value={this.state.message}
          onChange={(e) => this.handleChange(e)}
          aria-describedby="basic-addon1"
        />
      </form>
    );
  }
}

export default ChatInput;
