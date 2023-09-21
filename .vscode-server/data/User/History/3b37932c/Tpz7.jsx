// main.jsx
//import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Add this import
import App from './App';
import App from './App.css';

//ReactDOM.render(
  //<BrowserRouter>
   // <App />
  //</BrowserRouter>,
  //document.getElementById('root')
//);

// new code 
import { createRoot } from 'react-dom';

const root = document.getElementById('root');

if (root) {
  const reactRoot = createRoot(root);

  reactRoot.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}


