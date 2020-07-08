import React, { Component } from "react";
import styles from "./NavBar.module.css";

export default class NavBar extends Component {
  render() {
    const { showSpecificItems, focusedItems } = this.props;
    return (
      <div className={styles.allButtons}>
        <button
          id="allItems"
          onClick={(event) => {
            showSpecificItems(event.target.id);
          }}
          className={`${styles.btn} ${styles.allItems} ${
            focusedItems.allItems ? styles.focused : ""
          }`}
        >
          all
        </button>
        <button
          id="notCompletedItems"
          onClick={(event) => {
            showSpecificItems(event.target.id);
          }}
          className={`${styles.btn} ${styles.notCompletedItems} ${
            focusedItems.notCompletedItems ? styles.focused : ""
          }`}
        >
          active
        </button>
        <button
          id="completedItems"
          onClick={(event) => {
            showSpecificItems(event.target.id);
          }}
          className={`${styles.btn} ${styles.completedItems} ${
            focusedItems.completedItems ? styles.focused : ""
          }`}
        >
          completed
        </button>
      </div>
    );
  }
}
