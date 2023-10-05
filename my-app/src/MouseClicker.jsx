const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  return <button name="one" onClick={handleButtonClick}>Click here!</button>;
};

export default MouseClicker;
