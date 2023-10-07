// import Login from "./Login";

import UncontrolledLogin from "./UncontrolledLogin";

// const handleLogin = (formData) => {
//   console.log("Logging in with data:", formData);
// };

const App = () => {
  return (
    <div>
      {/* <Login onLogin={handleLogin} /> */}
      <UncontrolledLogin />
    </div>
  );
};

export default App;
