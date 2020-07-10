import React from "react";
import ToDoItem from "./TodoItem/TodoItem";
import styles from "./ToDoList.module.css";
import { connect } from "react-redux";
import { deleteItem, makeItemChecked } from "../../redux/actions/index";

const mapStateToProps = (state) => {
  return { items: state.items, searchedWord: state.searchedWord };
};

const actionCreators = {
  deleteItem,
  makeItemChecked,
};

function ToDoList(props) {
  //Function to compare "item.content" and search
  const compare = (longStr, shortStr) =>
    longStr.toLowerCase().includes(shortStr.toLowerCase());

  //An array of items, which are correspond to the "searchedWord"
  const filteredItems = props.items.filter((item) => {
    return compare(item.content, props.searchedWord);
  });

  const list = filteredItems.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        item={item}
        onChecked={() => props.makeItemChecked(item.id)}
        onDelete={() => props.deleteItem(item.id)}
      />
    );
  });

  return <div className={styles.list}>{list}</div>;
}

export default connect(mapStateToProps, actionCreators)(ToDoList);
