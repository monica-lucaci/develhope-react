import { useState ,useEffect} from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  const decrementCounter = () => {
    setCounter(counter - decrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  useEffect(() => {
    console.log(`Current Counter Value: ${counter}`);
  }, [counter]); 

  return (
    <>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment by {incrementAmount}</button>
      <button onClick={decrementCounter}>Decrement by {decrementAmount}</button>
      <button onClick={resetCounter}>Refresh</button>
    </>
  );
};

export default Counter;
