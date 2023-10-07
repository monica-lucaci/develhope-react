import { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
  const [value, setValue] = useState("");
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <input value={value} onInput={handleInput}></input>
      <Welcome name={value} />
    </>
  );
};

export default InteractiveWelcome;
