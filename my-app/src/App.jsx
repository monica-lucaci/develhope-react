import AlertClock from "./AlertClock";
import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";


const App = () => {
  const age = 3;

  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="John" age={age} />
      <AlertClock />
    </div>
  );
};

export default App;

