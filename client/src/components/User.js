/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getUser } from '../api/users/users';

const User = ({ userId }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      try {
        // Authorization = `Bearer ${token}`;
        const data = await getUser(userId);
        setUser(data);
        return user;
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
    <div>
      <p> This is the user page</p>
      {user}
    </div>

  );
};

export default User;
