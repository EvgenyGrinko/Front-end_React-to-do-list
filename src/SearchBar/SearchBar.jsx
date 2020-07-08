import React, { Component } from "react";
import styles from "./SearchBar.module.css";

export default class SearchBar extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <input
          id="searchElem"
          type="text"
          className={styles.inputBar}
          placeholder="Search"
          onChange={(event) => {
            onSearch(event.target.value);
          }}
        />
      </div>
    );
  }
}
