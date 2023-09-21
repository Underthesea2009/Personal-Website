// App.jsx
//import React from 'react';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link from react-router-dom
//import Home from './components/Home';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <nav> {/* Use a nav element for navigation links */}
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;







