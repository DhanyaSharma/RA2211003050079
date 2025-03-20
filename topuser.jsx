import { useEffect, useState } from "react";
import axios from "axios";

const TopUsersPage = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/users")
      .then(response => {
        const users = response.data;
        const sortedUsers = users.sort((a, b) => b.posts.length - a.posts.length);
        setTopUsers(sortedUsers.slice(0, 5));
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top 5 Users with Most Posts</h1>
      <ul>
        {topUsers.map(user => (
          <li key={user.id} className="border p-3 mb-2 rounded bg-gray-100">
            {user.name} - {user.posts.length} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsersPage;
