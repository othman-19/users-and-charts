/* eslint-disable react/prop-types */
import React from 'react';
import UsersList from './UsersList';
import SearchList from './SearchList';

const SideBar = ({ users }) => (
  <div>
    {users ? <SearchList users={users} /> : <UsersList />}
  </div>
);

export default SideBar;
