import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";

// Welcome.defaultProps = {
//   name: "guest",
// };

const App = () => {
  const nameWithStrong = <strong>Monica</strong>;
  const age = 31;

  return (
    <div>
      <Hello />
      <Message />
      <Welcome name={nameWithStrong} age={age} />
    </div>
  );
};

export default App;

//when you pass an expression it will be rendered.
// as in my case resulting in the name "Monica" being displayed in bold when the component is rendered.
