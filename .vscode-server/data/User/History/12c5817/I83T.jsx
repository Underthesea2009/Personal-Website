// Write your Color component here
//const Color = (props) => {
 // return <div className="red"></div>
//}

// src/App.jsx

import React from 'react';
import './index.css'; // Make sure to import your CSS file

const Color = (props) => {
  return <div className={props.color}></div>
}

const Picker = () => {
  return (
    <div id="colors-list">
      <Color color="red" />
      <Color color="blue" />
      <Color color="green" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* ... (your navbar code) */}
      
      {/* Color Picker */}
      <Picker />
      
      {/* ... (other components if any) */}
    </div>
  );
}

export default App;


