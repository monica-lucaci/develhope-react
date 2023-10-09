import Clock from "./Clock";
import Counter from "./Counter";
import Login from "./Login";
import Welcome from "./Welcome";

const App = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };
  return (
    <div>
      <Welcome name="Monica" />
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
      <Login onLogin={handleLogin} />
      <Clock />
    </div>
  );
};

export default App;
