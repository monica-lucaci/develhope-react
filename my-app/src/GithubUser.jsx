import React, { useState, useEffect } from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not Found!</div>;
  }

  return (
    <div className="github-user">
      <img src={user.avatar_url} alt={user.login} />
      <h2>Name: {user.name || "Not available"}</h2>
      <p>Login: {user.login}</p>
    </div>
  );
};

export default GithubUser;
