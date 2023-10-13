import Clock from "./Clock";
import Container from "./Container";
import Counter from "./Counter";
import Login from "./Login";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

const App = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
  };
  return (
    <Container>
      <Welcome name="Monica" />
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
      <Login onLogin={handleLogin} />
      <Clock />
      <TodoList />
    </Container>
  );
};

export default App;
