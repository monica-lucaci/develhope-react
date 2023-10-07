import React from "react";
import Login from "./Login";

const handleLogin = (formData) => {
  console.log("Logging in with data:", formData);
};

const App = () => {
  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;
