import React, { Component } from "react";
import styles from "./AddItemForm.module.css";
import inputStyle from "../SearchBar/SearchBar.module.css";

export default class AddItemForm extends Component {
  state = {
    content: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.content);
    this.setState({ content: "" });
  };
  handleChange = (event) => {
    this.setState({ content: event.target.value });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          action="#"
          type="submit"
          id="submit-form"
        >
          <input
            id="addElem"
            className={inputStyle.inputBar}
            type="text"
            placeholder="Add new item"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
