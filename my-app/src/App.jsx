import Colors from "./Colors";

const App = () => {
  return (
    <div>
      <Colors
        items={[
          {
            id: 1,
            name: "red",
          },
          {
            id: 2,
            name: "yellow",
          },
          {
            id: 3,
            name: "green",
          },
          {
            id: 4,
            name: "blue",
          },
          {
            id: 5,
            name: "pink",
          },
        ]}
      />
    </div>
  );
};

export default App;
