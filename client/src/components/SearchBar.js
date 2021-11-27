/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBar;
