import React, { useState } from "react";
import Button from "./Button/Button";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  const [focusedArea, setfocusedArea] = useState("allItems");

  const onChangeFocus = (area) => {
    setfocusedArea(area);
  };
  return (
    <div className={styles.allButtons}>
      <Button
        id="allItems"
        text="all"
        showSpecificItems={props.showSpecificItems}
        focusedArea={focusedArea}
        changeFocus={onChangeFocus}
      />
      <Button
        id="notCompletedItems"
        text="active"
        showSpecificItems={props.showSpecificItems}
        focusedArea={focusedArea}
        changeFocus={onChangeFocus}
      />
      <Button
        id="completedItems"
        text="completed"
        showSpecificItems={props.showSpecificItems}
        focusedArea={focusedArea}
        changeFocus={onChangeFocus}
      />
    </div>
  );
}
