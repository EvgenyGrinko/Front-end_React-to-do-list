import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        className={styles.inputBar}
        placeholder="Search"
        onChange={(event) => {
          props.onSearch(event.target.value);
        }}
      />
    </div>
  );
}
