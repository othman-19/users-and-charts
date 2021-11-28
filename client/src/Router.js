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
import Contact from './components/Contact';
import XMLUsersList from './components/XmlUsersList';

const AppRouter = () => (
  <div className="content">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/users.xml/" element={<XMLUsersList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default AppRouter;
