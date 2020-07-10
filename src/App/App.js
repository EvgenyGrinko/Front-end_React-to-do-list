import React from "react";
import ToDoList from "../components/ToDoList/ToDoList";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <SearchBar />
        <ToDoList />
        <NavBar />
        <AddItemForm />
      </div>
    </div>
  );
}

export default App;
