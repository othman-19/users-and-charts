/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import { getUsersAction } from '../redux/actions';
import { getUsers } from '../api/users/users';

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
    <div className="list">
      {users && (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>

            {users && (
              users.map(
                (user) => (
                  <ListItem disablePadding>
                    <Typography variant="h5">
                      <Link to={`/users/${user._id}`} key={user._id}>
                        {user.firstName}
                      </Link>
                    </Typography>
                  </ListItem>
                ),
              )
            )}
            {!users && (
              <p>loading...</p>
            )}
          </List>
        </nav>
      </Box>
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
