/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../api/users/users';

const User = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
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
      {user.firstName}
    </div>

  );
};

export default User;
