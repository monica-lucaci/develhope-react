import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onReset: resetCounter,
  };
};

const HookCounter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default HookCounter;
