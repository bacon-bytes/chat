import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Chat from "./components/chat";
import "./chat.css";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/" exact component={Chat} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
