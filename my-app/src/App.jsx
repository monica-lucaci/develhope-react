import AlertClock from "./AlertClock";
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";
// import Counter from "./Counter";
// import Hello from "./Hello";
// import Message from "./Message";
// import Welcome from "./Welcome";

// import MultiButton from "./MultiButton";

const App = () => {
  // const age = 3;
  const handleShowAlert = () => {
    const time = new Date().toLocaleTimeString();

    alert(`The time is ${time}`);
  };

  return (
    <div>
      {/* <Hello />
      <Message />
      <Welcome name="John" age={age} />
   
      <Counter initialValue={0} incrementAmount={2} decrementAmount={5}/> */}
      {/* <Clock /> */}
      <MouseClicker />
      {/* < MultiButton/> */}
      <AlertClock onButtonClick={handleShowAlert} />
      <Clock />
    </div>
  );
};

export default App;
