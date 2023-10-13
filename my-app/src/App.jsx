import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import Welcome from "./Welcome";
import Counter from "./Counter"; // Import the Counter component

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Welcome name="Monica" />} />
        <Route
          path="counter"
          element={
            <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
          }
        />
        
      </Routes>
    </Container>
  );
};

export default App;
