import React, { useState } from "react";
import inputStyle from "../SearchBar/SearchBar.module.css";

export default function AddItemForm(props) {
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content) props.onAdd(content);
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
