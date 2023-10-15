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
        <div>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
          <Link to="/users">GitHub Users</Link>
        </div>
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
            <Route index element={<div>Add a user and select it</div>} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
