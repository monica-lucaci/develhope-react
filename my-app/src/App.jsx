import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";


const App = () => {
  const nameWithStrong = <strong>Monica</strong>;
  const age = 17;

  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={nameWithStrong} age={age} />
    </div>
  );
};

export default App;

