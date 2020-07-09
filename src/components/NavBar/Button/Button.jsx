import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const handleClick = (event) => {
    props.changeFocus(props.id);
    props.showSpecificItems(event.target.id);
  };
  return (
    <button
      id={props.id}
      onClick={handleClick}
      className={`${styles.btn} ${styles[props.id]} ${
        props.focusedArea === props.id ? styles.focused : ""
      }`}
    >
      {props.text}
    </button>
  );
}
