import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
    </>
  );
};

export default Counter;
