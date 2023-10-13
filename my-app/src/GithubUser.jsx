import React, { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error while fetching user data", error);
      }
    };

    fetchUserData();
  }, [username]);

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
}

export default GithubUser;
