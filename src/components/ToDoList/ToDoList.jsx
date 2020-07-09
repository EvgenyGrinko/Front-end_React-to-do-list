import React from "react";
import ToDoItem from "./TodoItem/TodoItem";
import styles from "./ToDoList.module.css";

export default function ToDoList(props) {
  const list = props.items.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        item={item}
        onChecked={props.onChecked}
        onDelete={props.onDelete}
      />
    );
  });

  return <div className={styles.list}>{list}</div>;
}
