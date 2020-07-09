import React, { Component } from "react";
import Button from "./Button/Button";
import styles from "./NavBar.module.css";

export default class NavBar extends Component {
  state = {
    focusedArea: "allItems",
  };
  onChangeFocus = (area) => {
    this.setState({ focusedArea: area });
  };
  render() {
    return (
      <div className={styles.allButtons}>
        <Button
          id="allItems"
          text="all"
          props={this.props}
          focusedArea={this.state.focusedArea}
          changeFocus={this.onChangeFocus}
        />
        <Button
          id="notCompletedItems"
          text="active"
          props={this.props}
          focusedArea={this.state.focusedArea}
          changeFocus={this.onChangeFocus}
        />
        <Button
          id="completedItems"
          text="completed"
          props={this.props}
          focusedArea={this.state.focusedArea}
          changeFocus={this.onChangeFocus}
        />
      </div>
    );
  }
}
