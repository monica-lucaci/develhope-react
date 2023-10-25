import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchGithubUser = () => {
  const [username, setUsername] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (username.trim() === "") {
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        navigate(`/search/${username}`);
      } else {
        setUserNotFound(true);
      }
    } catch (error) {
      console.error("Error while checking user:", error);
      setUserNotFound(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userNotFound && <p>User not found. Please try again.</p>}
    </div>
  );
};

export default SearchGithubUser;
