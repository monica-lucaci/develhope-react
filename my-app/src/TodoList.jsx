import React, { useState } from "react";

const TodoList = () => {
 
  const [items, setItems] = useState([]);
  
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => setInputValue(e.target.value)

 
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); 
    }
  };



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
    </div>
  );
};

export default TodoList;
