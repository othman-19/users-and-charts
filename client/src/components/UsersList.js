/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../api/users/users';
import { getUsersAction } from '../redux/actions';

const Users = ({ getUsersDispatch, users }) => {
  useEffect(() => {
    (async () => {
      try {
        const data = await getUsers();
        return getUsersDispatch(data);
      } catch (err) {
        return err;
      }
    })();
  }, []);
  return (
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
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersDispatch: (users) => dispatch(getUsersAction(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
