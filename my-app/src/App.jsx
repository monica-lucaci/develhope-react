import { Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import Container from "./Container";
import Welcome from "./Welcome";
import Counter from "./Counter";

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>The requested page does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users/monica-lucaci">Monica's GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Monica" />} />
        <Route
          path="/counter"
          element={
            <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
          }
        />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
