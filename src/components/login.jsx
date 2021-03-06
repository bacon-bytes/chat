import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../chat.css";
import Joi from "@hapi/joi";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: {
      user_email: "",
      user_password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    user_email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),

    user_password: Joi.string().required().label("Password"),
  });

  doSubmit = (target) => {
    console.log("submitted!");
  };

  render() {
    return (
      <div className="loginBackdrop">
        <div className="loginContent">
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("user_email", "Email")}
              {this.renderInput("user_password", "Password", "password")}
              {this.renderButton("Submit")}
            </form>
          </div>
          <Link to="/signup" className="toAnotherForm">
            Need to create an account?
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
