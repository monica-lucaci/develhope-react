import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={incrementCounter}>Add one</button>
    </>
  );
};

export default Counter;
