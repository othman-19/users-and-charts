import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import { getUsersByName } from '../api/users/users';

const Search = () => {
  const [searchField, setSearchField] = useState({});
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField({ name: e.target.value });
  };

  const handleSearch = (name) => {
    if (name) {
      (async () => {
        try {
          const data = await getUsersByName(name);
          navigate('/');
          return setUsers(data);
        } catch (err) {
          return err;
        }
      })();
    }
  };

  return (
    <div className="SearchContainer">
      <SearchBar
        placeholder="Enter user first name ..."
        handleChange={handleChange}
      />
      <Button
        variant="outlined"
        type="submit"
        onClick={() => handleSearch(searchField.name)}
      >
        Search
      </Button>
      <SideBar users={users} />
    </div>
  );
};

export default Search;
