import React from "react";
import Counter from "./Counter"; // Import the Counter component

const App = () => {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
    </div>
  );
};

export default App;
