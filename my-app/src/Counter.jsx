import { useState } from "react";


const Counter = ({ initialValue, incrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </>
  );
}

export default Counter;

