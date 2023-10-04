import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      {age>18 && age<65 && name==="John" && <Age age={age} />}
    </>
  );
};

export default Welcome;

