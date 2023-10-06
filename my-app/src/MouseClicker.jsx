import icon from "/icon.png";

const MouseClicker = () => {
  const handleButtonClick = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleImageClick = (event) => {
    console.log(event.target.src);
  };

  return (
    <>
      <button name="one" onClick={handleButtonClick}>
        Click here!
        <img
          src={icon}
          onClick={handleImageClick}
          alt="Icon"
          width={20}
          height={20}
        />
      </button>
    </>
  );
};

export default MouseClicker;

//Since the image is contained within the <button> , the button's onClick event handler (handleButtonClick) is also triggered.
//in order to stop the propagation this should be used
// const handleImageClick = (event) => {
//     console.log(event.target.src);
//     event.stopPropagation();
//   }
