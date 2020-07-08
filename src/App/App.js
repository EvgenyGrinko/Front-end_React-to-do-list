import React, { Component } from "react";
import ToDoList from "../ToDoList/ToDoList";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import AddItemForm from "../AddItemForm/AddItemForm";
import styles from "./App.module.css";

class App extends Component {
  state = {
    items: [],
    id: 0,
    // displayedArea: "allItems",
    focusedItems: {
      allItems: true,
      notCompletedItems: false,
      completedItems: false,
    },
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

  onAdd = (newItem) => {
    this.setState({ id: this.state.id + 1 });
    const items = [
      ...this.state.items,
      { content: newItem, id: this.state.id, completed: false, display: true },
    ];
    this.setState({ items });
  };

  //BAD CODE
  showSpecificItems = (area) => {
    const focused = Object.entries(this.state.focusedItems).map(
      ([button, state]) => {
        return button === area ? [button, true] : [button, false];
      }
    );
    this.setState({ focusedItems: Object.fromEntries(focused) });

    const items = this.state.items.map((item) => {
      switch (area) {
        case "allItems":
          item.display = true;
          this.setState({ displayedArea: area });
          return item;
        case "notCompletedItems":
          item.completed ? (item.display = false) : (item.display = true);
          this.setState({ displayedArea: area });
          return item;
        case "completedItems":
          item.completed ? (item.display = true) : (item.display = false);
          this.setState({ displayedArea: area });
          return item;
        default:
          return;
      }
    });
    this.setState({ items });
  };

  onSearch = (value) => {
    const pattern = new RegExp(`^.*${value}.*$`, "i");
    // item.content.toLowerCase().includes(value.toLowerCase())

    const items = this.state.items.filter((item) => {
      if (this.state.focusedItems.allItems) return pattern.test(item.content);
      if (this.state.focusedItems.notCompletedItems)
        return !item.completed && pattern.test(item.content);
      else return item.completed && pattern.test(item.content);
    });
    this.setState({ items });

    //     item.display = true;
    //     return item;
    //   }
    // this.state.focusedItems.notCompletedItems && !item.completed
    //   ? (item.display = true)
    //   : (item.display = false);

    // this.state.focusedItems.completedItems && item.completed
    //   ? (item.display = true)
    //   : (item.display = false);
    //   return item;

    // this.setState({ items });

    // const items = this.state.items.map((item)=>{
    //   (item.)
    // })
  };
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <SearchBar onSearch={this.onSearch} />
          <ToDoList
            items={this.state.items}
            onChecked={this.onChecked}
            onDelete={this.onDelete}
          />
          <NavBar
            showSpecificItems={this.showSpecificItems}
            focusedItems={this.state.focusedItems}
          />
          <AddItemForm onAdd={this.onAdd} />
        </div>
      </div>
    );
  }
}

export default App;
