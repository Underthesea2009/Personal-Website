import React from 'react';
import './App.css';

const Color = (props) => {
  return <div className={props.color}></div>
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">Navbar</nav>
      <div id="colors-list">
        <Color color="red" />
        <Color color="blue" />
        <Color color="green" />
      </div>
    </div>
  );
}

export default App;



