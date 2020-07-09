import React from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem(props) {
  return (
    <div
      className={`${styles.list__item} ${
        props.item.completed ? styles.completedItems : styles.notCompletedItems
      } ${props.item.display ? "" : styles.hideItem}`}
      key={props.item.id}
      id={props.item.id}
    >
      <div
        className={styles.list__item_text}
        onClick={() => {
          props.onChecked(props.item.id);
        }}
      >
        {props.item.content}
      </div>

      <span
        className={styles.list__item_checkBtn}
        onClick={() => {
          props.onDelete(props.item.id);
        }}
      ></span>
    </div>
  );
}
