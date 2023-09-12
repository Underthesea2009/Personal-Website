

import { useState, useEffect } from 'react';
import { puppyList } from './data.js';
import './App.css';

function PuppyList({ puppies }) {
  return (
    <div className="puppy-list">
      {puppies.map((puppy) => (
        <p key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
  );
}

function App() {
  const [puppies, setPuppies] = useState([]);
  const [featPupId, setFeatPupId] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setPuppies(puppyList);
    }, 1000); // Simulate a 1-second delay for fetching data
  }, []);

  function handleClick(puppyId) {
    // Update featPupId when a puppy is clicked
    setFeatPupId(puppyId);
  }

  // new code start
  //const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  //{featPupId && (
    //<div>
     // <h2>{featuredPup.name}</h2>
      //<ul>
       // <li>Age: {featuredPup.age}</li>
       // <li>Email: {featuredPup.email}</li>
     // </ul>
    //</div>
 // )}

  // added code start here
  <p onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
  {puppy.name}
</p>

const handlePuppyClick = (puppyId) => {
  // Set the featPupId state variable to the clicked puppy's ID
  setFeatPupId(puppyId);
};

import React, { useState } from 'react';

function PuppyList({ puppies }) {
  // State variable to store the ID of the selected puppy
  const [featPupId, setFeatPupId] = useState(null);

  // Define the click handler for the <p> element
  const handlePuppyClick = (puppyId) => {
    // Set the featPupId state variable to the clicked puppy's ID
    setFeatPupId(puppyId);
  };

  return (
    <div>
      {puppies.map((puppy) => (
        <p onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {/* Conditionally render a detailed view of the selected puppy */}
      {featPupId !== null && (
        <div>
          <h2>Selected Puppy:</h2>
          <p>ID: {featPupId}</p>
          {/* Render additional details of the selected puppy here */}
        </div>
      )}
    </div>
  );
}

export default PuppyList;
  
  


// new code stop 
// part of original code 
  //return (
    //<div className="App">
      //<h1>Puppy List</h1>
     // {puppies.length === 0 ? (
       // <p>Loading...</p>
    //  ) : (
        //<>
         // <PuppyList puppies={puppies} />
          //{featPupId !== null && (
           // <p>Featured Puppy: {puppies.find((puppy) => puppy.id === featPupId).name}</p>
          //)}
       // </>
      //)}
   // </div>
  //);
//}

//export default App;
