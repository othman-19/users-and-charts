/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

const SearchList = ({ users }) => (
  <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>
          {users && (
            users.map(
              (user) => (
                <Typography variant="h5">
                  <Link to={`/users/${user._id}`} key={user._id}>
                    {user.firstName}
                  </Link>
                </Typography>
              ),
            )
          )}
          {!users && (
          <p>loading...</p>
          )}
        </ListItem>
      </List>

    </nav>
  </Box>

);

export default SearchList;
