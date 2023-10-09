import Counter from "./Counter";
import Welcome from "./Welcome";


const App = () => {
  return (
    <div>
    <Welcome name="Monica" />
    <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
    </div>
  );
};

export default App;
