import React, { useState } from "react";
import classes from "./TodoList.module.scss";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => setInputValue(e.target.value);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const resetItems = () => {
    setItems([]);
    setInputValue("");
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li className={classes.list} key={index}>
            {item}
            <button
              className={classes.button}
              onClick={() => removeItem(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button className={classes.addButton} onClick={addItem}>Add</button>
      <button className={classes.resetButton} onClick={resetItems}>Reset</button>
    </div>
  );
};

export default TodoList;
