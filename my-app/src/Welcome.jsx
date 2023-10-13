import { Link } from "react-router-dom";
import Age from "./age";

const Welcome = ({ name = "guest", age }) => {
  return (
   
    <div className="welcome">          
      <p>Welcome, {name}!</p>
      {/* {<Age age={31} />} */}
      <Link to="/counter">Counter</Link>
      <hr />
      <Link to="users/monica-lucaci">Visit Monica's GitHub Profile</Link>

    </div>
  );
};

export default Welcome;

