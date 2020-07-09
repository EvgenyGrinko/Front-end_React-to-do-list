import React, { Component } from "react";
import ToDoList from "../components/ToDoList/ToDoList";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import styles from "./App.module.css";

class App extends Component {
  state = {
    items: [],
    notCompletedItems: false,
    completedItems: false,
    searchedWord: "",
  };

  onChecked = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = true;
        return item;
      } else return item;
    });
    this.setState({ items });
  };

  onDelete = (id) => {
    const items = this.state.items.filter((item) => {
      return item.id !== id ? item : null;
    });
    this.setState({ items });
  };

  onAdd = (text) => {
    const items = [
      ...this.state.items,
      { content: text, id: Math.random(), completed: false, display: true },
    ];
    this.setState({ items });
  };

  showSpecificItems = (area) => {
    const items = this.state.items.map((item) => {
      switch (area) {
        case "allItems":
          item.display = true;
          return item;
        case "notCompletedItems":
          item.completed ? (item.display = false) : (item.display = true);
          return item;
        case "completedItems":
          item.completed ? (item.display = true) : (item.display = false);
          return item;
        default:
          return;
      }
    });
    this.setState({ items });
  };

  onSearch = (value) => {
    this.setState({ searchedWord: value });
  };

  //Function to compare "item.content" and search
  compare = (longStr, shortStr) =>
    longStr.toLowerCase().includes(shortStr.toLowerCase());

  render() {
    const {
      items,
      searchedWord,
      notCompletedItems,
      completedItems,
    } = this.state;

    const filteredItems = items.filter((item) => {
      if (!notCompletedItems && !completedItems)
        return item.content.toLowerCase().includes(searchedWord.toLowerCase());
      if (notCompletedItems && !item.completed)
        return item.content.toLowerCase().includes(searchedWord.toLowerCase());
      if (completedItems && item.completed)
        return item.content.toLowerCase().includes(searchedWord.toLowerCase());
    });

    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <SearchBar onSearch={this.onSearch} />
          <ToDoList
            items={filteredItems}
            onChecked={this.onChecked}
            onDelete={this.onDelete}
          />
          <NavBar showSpecificItems={this.showSpecificItems} />
          <AddItemForm onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;
