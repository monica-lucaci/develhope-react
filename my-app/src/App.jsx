import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";

// Welcome.defaultProps = {
//   name: "guest",
// };

const App = () => {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="monica" age={31} />
    </div>
  );
};

export default App;
