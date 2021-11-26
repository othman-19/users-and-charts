import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <Link to="/">
      Home
    </Link>

    <Link to="/users">
      Users List
    </Link>

    <Link to="/about">
      About
    </Link>
  </>
);

export default Navbar;
