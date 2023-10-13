import React, { useState, useEffect } from "react";
import GithubUser from "./GitHubUser";
import "./GithubUsers.css";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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
            <li
              key={user.login}
              onClick={() => setSelectedUser(user.login)}
              style={{ cursor: "pointer" }}
            >
              {user.login}
            </li>
          ))}
        </ul>
      </div>
      <div className="user-details">
        {selectedUser && <GithubUser username={selectedUser} />}
      </div>
    </div>
  );
};

export default GithubUsers;
