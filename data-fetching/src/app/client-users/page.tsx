"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch users", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      <strong>Users</strong>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
           <br />
            <strong>{user.username}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
