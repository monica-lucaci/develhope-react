import Color from "./Color";

;

const Colors = () => {
  return (
   
    <Color
      items={[
        {
          id: 1,
          name: "red",
          intensity: 'soft',
        },
        {
          id: 2,
          name: "yellow",
          intensity: 'vibrant',
        },
        {
          id: 3,
          name: "green",
          intensity: 'luminous',
        },
        {
          id: 4,
          name: "blue",
          intensity: 'bright',
        },
        {
          id: 5,
          name: "pink",
          intensity: 'soft',
        },
      ]}
    />
  );
};

export default Colors;
