import { useState } from "react";
import "./Container.css";

const Container = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  const handleButtonToggle = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="container">
      <div className="container-title">
        {title}
        <button onClick={handleButtonToggle}>
          {!collapse ? "Close" : "Open"}
        </button>
      </div>
      {!collapse && <div className="container-content">{children}</div>}
    </div>
  );
};

export default Container;
