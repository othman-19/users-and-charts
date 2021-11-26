import React from 'react';
import {
  Routes,
  Route,
  // Link,
} from 'react-router-dom';
import Home from './components/Home';
import UsersList from './components/UsersList';
import User from './components/User';
import About from './components/About';

const AppRouter = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UsersList />} />
    <Route path="/users/id" element={<User />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRouter;
