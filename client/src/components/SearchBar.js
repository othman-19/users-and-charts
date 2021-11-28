import React from 'react';
import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
