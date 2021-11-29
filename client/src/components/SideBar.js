import React from 'react';
import PropTypes from 'prop-types';
import UsersList from './UsersList';
import SearchList from './SearchList';

const SideBar = ({ users }) => (
  <div className="list">
    {users ? <SearchList users={users} /> : <UsersList />}
  </div>
);

SideBar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default SideBar;
