// Write your Color component here
//const Color = (props) => {
  //return <div className="red"></div>
//}

//const App = () => {
  //return (
    //<div id="container">
     // <div id="navbar">
       // <div>Currently selected: </div>
        //<div className="red">red</div>
      //</div>
     // <div id="colors-list">{/* colors go here */}</div>
    //</div>
  //);
//};

//export default App;

// new code starts here
// Color.js
//import React from 'react';

const Color = ({ color }) => {
  return <div className={color}></div>;
};

//export default Color;

// App.js
import React from 'react';
import './App.css';
import Color from './Color';

const App = () => {
  return (
    <div>
      <div id="colors-list">
        <Color color="red" />
        <Color color="blue" />
        <Color color="green" />
      </div>
    </div>
  );
}


//export default App;

// more code starts here
import React, { useState } from 'react';

//const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );

export default App;
