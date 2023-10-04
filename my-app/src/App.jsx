import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="Monica" />
    </div>
  );
}

export default App;

//"You can use the Message in the App component by importing it. Its message will be displayed twice: once within the Hello component and once from the App component itself."
