import React, { Component } from "react";
import styles from "./ToDoList.module.css";

export default class ToDoList extends Component {
  render() {
    const { items, onChecked, onDelete } = this.props;
    const list = items.map((item) => {
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
    });

    return <div className={styles.list}>{list}</div>;
  }
}
