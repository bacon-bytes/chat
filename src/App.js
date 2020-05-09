import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";
import Signup from "./components/signup";
import "./chat.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/chat" component={Chat} />
          <Route path="/" exact component={Chat} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
