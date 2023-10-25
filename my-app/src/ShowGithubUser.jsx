import React from "react";
import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      {username ? (
        <GithubUser username={username} />
      ) : (
        <p>User doesn't exist. Please try again.</p>
      )}
    </div>
  );
};

export default ShowGithubUser;
