import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="flex-div">
        <SearchContainer />
        <Routes />
      </div>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
