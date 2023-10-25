import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom"; 


const GithubUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok) {
          const userList = await response.json();
          setUsers(userList);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error while fetching user data", error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <div className="github-users">
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-details">
        <Outlet />
      </div>
    </div>
  );
};

export default GithubUsers;
