import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "@hapi/joi";
import Form from "./common/form";
import "../chat.css";

class Signup extends Form {
  state = {
    data: {
      user_email: "",
      user_password: "",
      user_repeat_password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    user_email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    user_password: Joi.string().required().label("Password"),
    user_repeat_password: Joi.ref("user_password"),
  });

  doSubmit = (target) => {
    console.log("submitted!");
  };
  render() {
    return (
      <div className="loginBackdrop">
        <div className="signupContent">
          <div>
            <h1>Signup</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("user_email", "Email")}
              {this.renderInput("user_password", "Password", "password")}
              {this.renderInput(
                "user_repeat_password",
                "Repeat Password",
                "password"
              )}
              {this.renderButton("Submit")}
            </form>
          </div>
          <Link to="/login" className="toAnotherForm">
            Already have an account?
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
