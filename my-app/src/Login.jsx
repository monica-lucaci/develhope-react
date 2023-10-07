import React, { useState } from "react";

const CreateFormData = () => {
  return {
    username: "",
    password: "",
    remember: false,
  };
};

const Login = ({ onLogin }) => {
  const [data, setData] = useState(CreateFormData);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login button pressed", data);
    onLogin(data);
  };

  return (
    <>
    <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={data.username}
          name="username"
          onChange={handleInputChange} 
          placeholder="username"
        />
        <input
          value={data.password}
          type="password"
          name="password"
          onChange={handleInputChange} 
          placeholder="password"
        />
        <input
          checked={data.remember}
          type="checkbox"
          name="remember"
          onChange={handleInputChange}
        />
        <label htmlFor="remember">Remember me!</label>
        <button type="submit" disabled={!data.username || !data.password}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
