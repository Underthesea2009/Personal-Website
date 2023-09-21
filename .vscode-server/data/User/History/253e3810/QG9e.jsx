// App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Add this import

import Home from './components/Home';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link> {/* Add this Link */}
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} /> {/* Add this Route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;






