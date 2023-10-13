import GithubUser from "./GitHubUser";

const App = () => {
  return (
    <>
      <div className="app">
        <h1>My GitHub User</h1>
        <GithubUser username="monica-lucaci" />
      </div>
    </>
  );
};

export default App;
