// code from gpt starts here 
//import React from 'react';

//const Color = (props) => {
 // return <div className={props.color}></div>
//}

//function App() {
  //return (
   // <div>
   // {/* ...other components or content */}
      //<div id="colors-list">
       // <Color color="red" />
       // <Color color="blue" />
       // <Color color="green" />
      //</div>
//</div>
  //);
//}

//export default App;

// code from gpt ends here

// original code start here 
import React from 'react';

// Write your Color component here 
const Color = (props) => {
  return <div className="red"></div>
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{red}</div>
    </div>
  );
};
const Color = (props) => {
  return <div className={props.color}></div>
}

/* or using object deconstruction */

const Color = ({color}) => {
  return <div className={color}></div>
}

export default App;
