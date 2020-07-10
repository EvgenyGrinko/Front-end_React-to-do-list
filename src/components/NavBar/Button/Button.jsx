import React from "react";
import styles from "./Button.module.css";
import {showItemsForCurrentArea} from "../../../redux/actions/index";
import {connect} from "react-redux";

const actionCreators = {showItemsForCurrentArea}

function Button(props) {
  const handleClick = (event) => {
    props.changeFocus(props.id);
    props.showItemsForCurrentArea(event.target.id);
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

export default connect(null, actionCreators)(Button)