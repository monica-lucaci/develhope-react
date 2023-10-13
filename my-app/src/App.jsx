import { Route, Routes } from "react-router-dom";
import  Container  from "./Container";
import Welcome from "./Welcome";


const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Welcome name="Monica" /> }/>
      </Routes>
    </Container>
  );
};

export default App;



//Render the App component within a BrowserRouter component.
//did that in Root.jsx
