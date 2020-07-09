import React, { Component } from "react";
import styles from "./Button.module.css";

export default class Button extends Component {
  render() {
    const { focusedArea, changeFocus } = this.props;
    const { id, text, props } = this.props;
    const handleClick = (event) => {
      changeFocus(id);
      props.showSpecificItems(event.target.id);
    };
    return (
      <button
        id={id}
        onClick={handleClick}
        className={`${styles.btn} ${styles[id]} ${
          focusedArea === this.props.id ? styles.focused : ""
        }`}
      >
        {text}
      </button>
    );
  }
}
