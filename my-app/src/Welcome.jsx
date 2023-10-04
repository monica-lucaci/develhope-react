import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      {<Age age={age} />}
    </>
  );
};

export default Welcome;

