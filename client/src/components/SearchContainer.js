import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { getUsersByName } from '../api/users/users';

const Search = () => {
  const [searchField, setSearchField] = useState({});

  const handleChange = (e) => {
    setSearchField({ name: e.target.value });
  };

  const handleSearch = (name) => {
    (async () => {
      try {
        const data = await getUsersByName(name);
        console.log(data);
        return data;
      } catch (err) {
        return err;
      }
    })();
  };

  return (
    <div>
      <SearchBar
        placeholder="Enter user first name ..."
        handleChange={handleChange}
      />
      <button type="submit" onClick={() => handleSearch(searchField.name)}>
        Search
      </button>
    </div>
  );
};

export default Search;
