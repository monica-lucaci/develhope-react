import React, { useState } from "react";

const TodoList = () => {
 
  const [items, setItems] = useState([]);
  
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => setInputValue(e.target.value)

 
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); //THIS CLEARS the input every time one item is added 
    }
  };

  const resetItems = () => {
    setItems([]);
  }


  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
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