import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validation = (obj) => {
    const options = {
      abortEarly: false,
    };
    const { error } = this.schema.validate(obj, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  checkForErrors = () => {
    return this.validation(this.state.data);
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const errors = this.validation(obj);
    let error;
    if (errors.hasOwnProperty(name)) error = errors[name];
    return error ? error : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validation(this.state.data);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit(e.target);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <div>
        {this.checkForErrors() && (
          <button disabled type="submit" value="Send">
            {label}
          </button>
        )}
        {!this.checkForErrors() && (
          <button type="submit" value="Send">
            {label}
          </button>
        )}
      </div>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
