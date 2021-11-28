/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({ users }) => (
  <div>
    <p> This is the users list page</p>
    {users && (
      <ul>
        { users.map((user) => <li key={user._id}><Link to={`/users/${user._id}`}>{user.firstName}</Link></li>) }
      </ul>
    )}
    {!users && (
      <p>loading...</p>
    )}
  </div>

);

export default SearchList;
