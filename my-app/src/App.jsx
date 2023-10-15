import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUsers from "./GithubUsers";
import Container from "./Container";
import ShowGithubUser from "./ShowGithubUser";

const NotFound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>The requested page does not exist.</p>
  </div>
);

const App = () => {
  return (
    <div>
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
              <Link to="/users">GitHub Users</Link>
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route path="/" element={<Welcome name="Monica" />} />
          <Route
            path="/counter"
            element={
              <Counter
                initialValue={0}
                incrementAmount={1}
                decrementAmount={1}
              />
            }
          />
          <Route path="/users" element={<GithubUsers />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
