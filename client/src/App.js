import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer';
import UsersList from './components/UsersList';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <SearchContainer />
      <UsersList />
      <Routes />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
