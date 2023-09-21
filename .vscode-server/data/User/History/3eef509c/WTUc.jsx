// Write your Color component here

//const App = () => {
  //return (
    //<div id="container">
     // <div id="navbar">
       // <div>Currently selected: </div>
        //<div className="red">red</div>
     // </div>
      //<div id="colors-list">{/* colors go here */}</div>
   // </div>
  //);
//};

//export default App;

// new code start
import React, { useState } from 'react';
import './App.css';

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};


  
const App = () => {
  return (
    <div id="container">
    <Picker/>

      
    </div>
  );
}


const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;






