import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
