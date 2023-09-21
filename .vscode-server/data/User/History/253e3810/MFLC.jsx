import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    // new code-start
    <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">{/* navigation here */}</div>
    <div id="main-section">{/* routes here */}</div>
  </div>
  // new code-ends 

export default App
