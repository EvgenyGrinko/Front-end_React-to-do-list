import React, { useState } from "react";
import inputStyle from "../SearchBar/SearchBar.module.css";
import { addTodoItem } from "../../redux/actions/index";
import { connect } from "react-redux";

const actionSelectors = { addTodoItem };

function AddItemForm(props) {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //If the user typed anything in the input field add new item to the "items" state in Redux
    if (content)
      props.addTodoItem({
        content: content,
        id: Math.random(),
        completed: false,
        display: true,
      });
    //After addition, empty the input field
    setContent("");
  };
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="#" type="submit" id="submit-form">
        <input
          id="addElem"
          className={inputStyle.inputBar}
          type="text"
          placeholder="Add new item"
          onChange={handleChange}
          value={content}
        />
      </form>
    </div>
  );
}

export default connect(null, actionSelectors)(AddItemForm);
