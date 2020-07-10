import React from "react";
import styles from "./SearchBar.module.css";
import {connect} from "react-redux";
import {setSearchedWord} from "../../redux/actions/index"

const actionCreators = {setSearchedWord}

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        className={styles.inputBar}
        placeholder="Search"
        onChange={(event) => {
          props.setSearchedWord(event.target.value);
        }}
      />
    </div>
  );
}

export default connect(null, actionCreators)(SearchBar)