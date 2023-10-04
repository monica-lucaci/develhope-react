import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      {!!age && <Age age={age} />}
    </>
  );
};

export default Welcome;
