import React, { Component } from "react";
import styles from "./TodoItem.module.css";

export default class TodoItem extends Component {
  render() {
    const { item, onChecked, onDelete } = this.props;
    return (
      <div
        className={`${styles.list__item} ${
          item.completed ? styles.completedItems : styles.notCompletedItems
        } ${item.display ? "" : styles.hideItem}`}
        key={item.id}
        id={item.id}
      >
        <div
          className={styles.list__item_text}
          onClick={() => {
            onChecked(item.id);
          }}
        >
          {item.content}
        </div>

        <span
          className={styles.list__item_checkBtn}
          onClick={() => {
            onDelete(item.id);
          }}
        ></span>
      </div>
    );
  }
}
