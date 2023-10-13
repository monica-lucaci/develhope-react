





import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchUserData = async () => {
        try {
          setLoading(true);
          setError(null);
    
          const response = await fetch(`https://api.github.com/users/${username}`);
    
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            setError("Failed to fetch user data");
          }
        } catch (error) {
          setError("Error while fetching user data");
        } finally {
          setLoading(false);
        }
      };

    fetchUserData();
  }, [username]);

  return { user, loading, error };
};

export default useGithubUser;



