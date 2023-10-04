import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";


const App = () => {
  const age = 31;

  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="John" age={age} />
    </div>
  );
};

export default App;

