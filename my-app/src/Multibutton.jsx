const Multibutton = () => {
  const handleClickButton = (event) => {
    console.log(event.target.name);
  };
  return (
    <>
      <button name="one" onClick={handleClickButton}>
        Button1
      </button>
      <button name="two" onClick={handleClickButton}>
        Button2
      </button>
      <button name="three" onClick={handleClickButton}>
        Button3
      </button>
    </>
  );
};

export default Multibutton;
