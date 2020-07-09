import React, { Component } from "react";
import ToDoItem from "./TodoItem/TodoItem";
import styles from "./ToDoList.module.css";

export default class ToDoList extends Component {
  render() {
    const { items, onChecked, onDelete } = this.props;
    const list = items.map((item) => {
      return (
        <ToDoItem
          key={item.id}
          item={item}
          onChecked={onChecked}
          onDelete={onDelete}
        />
      );
    });

    return <div className={styles.list}>{list}</div>;
  }
}
