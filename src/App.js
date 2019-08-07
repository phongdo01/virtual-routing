import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import VerticalMenu from './components/VerticalMenu';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3" id = "left-block">
            <VerticalMenu/>
          </div>
          <div className="col-9" id = "right-block"></div>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
