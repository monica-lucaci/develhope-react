import { Route, Routes, useParams } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import Container from "./Container";
import Welcome from "./Welcome";
import Counter from "./Counter"; // Import the Counter component

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Welcome name="Monica" />} />
        <Route
          path="/counter"
          element={
            <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
          }
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Container>
  );
};

export default App;


