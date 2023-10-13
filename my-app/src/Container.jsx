import "./Container.css";

const Container = ({ title, children }) => {
  return (
    <div className="container">
      <div className="container-title">{title}</div>
      <div className="container-content">{children}</div>
    </div>
  );
};

export default Container;
