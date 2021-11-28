import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  // Link,
} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';

const AppRouter = () => (
  <div className="content">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
);

export default AppRouter;
