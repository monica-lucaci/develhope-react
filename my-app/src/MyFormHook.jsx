import React from "react";
import useFormInput from "./useFormInput"; 

const MyFormHook = () => {
  const username = useFormInput("");
  const password = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.value);
    console.log("Password:", password.value);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...username} 
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...password} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormHook;
