import React, { useState } from "react";
import ToDoList from "../components/ToDoList/ToDoList";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");

  //Function handles click on the item text
  const onChecked = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          item.completed = true;
          return item;
        } else return item;
      });
    });
  };

  //Function handles click on the "trash bin" icon and deletes this item
  const onDelete = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id ? item : null;
      });
    });
  };

  //Function adds new item
  const onAdd = (text) => {
    setItems((prevValues) => {
      return [
        ...prevValues,
        { content: text, id: Math.random(), completed: false, display: true },
      ];
    });
  };

  //Function handles items visibility
  const showSpecificItems = (area) => {
    setItems((prevValues) => {
      return prevValues.map((item) => {
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
    });
  };

  //Function sets the "searchedWord" to the value, which the user is typed in the input field of SearchBar component
  const onSearch = (value) => {
    setSearchedWord(value);
  };

  //Function to compare "item.content" and search
  const compare = (longStr, shortStr) =>
    longStr.toLowerCase().includes(shortStr.toLowerCase());

  //An array of items, which are correspond to the "searchedWord"
  const filteredItems = items.filter((item) => {
    return compare(item.content, searchedWord);
  });

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <SearchBar onSearch={onSearch} />
        <ToDoList
          items={filteredItems}
          onChecked={onChecked}
          onDelete={onDelete}
        />
        <NavBar showSpecificItems={showSpecificItems} />
        <AddItemForm onAdd={onAdd} />
      </div>
    </div>
  );
}

export default App;
