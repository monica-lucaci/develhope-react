import React, { useState } from "react";

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
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button onClick={addItem}>Add</button>
      <button onClick={resetItems}>Reset</button>
    </div>
  );
};

export default TodoList;
