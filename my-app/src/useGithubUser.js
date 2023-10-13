import { useState, useEffect } from "react";

const useGithubUser = (username) => {
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

  return user;
};

export default useGithubUser;
