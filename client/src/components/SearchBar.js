/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const SearchBar = ({ placeholder, handleChange }) => (
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '50ch', margin: '1.5rem' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
      id="filled-basic"
      label="First Name"
      variant="filled"
    />
  </Box>
);

export default SearchBar;
