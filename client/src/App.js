import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Router';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
