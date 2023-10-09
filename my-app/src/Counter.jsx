import React, { useState, useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
    directionRef.current = "up";
  };

  const decrementCounter = () => {
    setCounter(counter - decrementAmount);
    directionRef.current = "down";
  };

  const resetCounter = () => {
    setCounter(initialValue);
    directionRef.current = null;
  };

  const prevDirectionRef = useRef(null);

  useEffect(() => {
    if (directionRef.current !== prevDirectionRef.current) {
      console.log(`Direction changed: ${directionRef.current}`);
      prevDirectionRef.current = directionRef.current;
    }

    console.log(`Current Counter Value: ${counter}`);
  }, [counter]);

  return (
    <div style={{ backgroundColor: "aqua", color: "black", border:"1px solid black" }}>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
      <button onClick={decrementCounter}>Decrement by {decrementAmount}</button>
      <button onClick={resetCounter}>Refresh</button>
    </div>
  );
};

export default Counter;
