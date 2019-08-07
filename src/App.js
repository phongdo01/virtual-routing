import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import VerticalMenu from './components/VerticalMenu';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="col-3 menu-ngang">
        <VerticalMenu/>
      </div>
      <div className="col-9"></div>
    </Router>
  );
}

export default App;
