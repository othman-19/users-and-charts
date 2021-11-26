import React from 'react';
import { Link } from 'react-router';
import Home from './Home';
import Users from './UsersList';
import About from './About';

// eslint-disable-next-line react/function-component-definition
const Navbar = () => (
  <>
    <Link to="/">
      <Home />
    </Link>

    <Link to="/">
      <Users />
    </Link>

    <Link to="/">
      <About />
    </Link>
  </>
);

export default Navbar;
