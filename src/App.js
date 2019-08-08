import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import Fee from './components/Fee';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Fee/>
      <Footer/>
    </Router>
  );
}

export default App;
