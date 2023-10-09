import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
   
    <div className="welcome">          
      <p>Welcome, {name}!</p>
      {<Age age={31} />}
    </div>
  );
};

export default Welcome;

