const Color = ({ items }) => {
  return (
    <ul>
      {items.map((color) => (
        <li key={color.id}>
          <h4>{color.name}</h4>
          <p>{color.intensity}</p>
        </li>
      ))}
    </ul>
  );
};

export default Color;
