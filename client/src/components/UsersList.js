import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/users/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // Authorization = `Bearer ${token}`;
        const data = await getUsers();
        setUsers(data);
        return users;
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
    <div>
      <p> This is the users list page</p>
      <ul>
        { users.map((user) => <li>{user.firstName}</li>)}
      </ul>
    </div>

  );
};

export default Users;
