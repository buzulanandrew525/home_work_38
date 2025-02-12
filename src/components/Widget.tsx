import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
}

const Widget: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        setUsers(users);
      } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.id}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Widget;
