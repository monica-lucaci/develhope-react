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




//should be a function setCounter((counter)=>{counter+1})

//Providing a function ensures that state updates are based on the latest state, reducing the risk of race conditions.
//Functional Updates: Using a function allows you to perform state updates based on the previous state, which is especially important when the new state depends on the old state. For example, if you want to increment a counter by a specific amount, you can do so safely using a function.