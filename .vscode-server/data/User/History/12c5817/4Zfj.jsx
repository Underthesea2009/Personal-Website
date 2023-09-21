import React from 'react';

const Color = (props) => {
  return <div className={props.color}></div>
}

function App() {
  return (
    <div>
      {/* ...other components or content */}
      <div id="colors-list">
        <Color color="red" />
        <Color color="blue" />
        <Color color="green" />
      </div>
    </div>
  );
}

export default App;
