const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.currentTarget.name);
  };

  return (
    <>
      <button name="one" onClick={handleButtonClick}>
        Click here!
        <img width={24} height={24} />
      </button>
    </>
  );
};

export default MouseClicker;
