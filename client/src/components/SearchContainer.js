import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import { getUsersByName } from '../api/users/users';

const Search = () => {
  const [searchField, setSearchField] = useState({});
  const [users, setUsers] = useState(null);

  const handleChange = (e) => {
    setSearchField({ name: e.target.value });
  };

  const handleSearch = (name) => {
    (async () => {
      try {
        const data = await getUsersByName(name);
        return setUsers(data);
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
      <SideBar users={users} />
    </div>
  );
};

export default Search;
