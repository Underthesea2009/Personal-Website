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

  return (
    <div className="App">
      <h1>Puppy List</h1>
      {puppies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <PuppyList puppies={puppies} />
          {featPupId !== null && (
            <p>Featured Puppy: {puppies.find((puppy) => puppy.id === featPupId).name}</p>
          )}
        </>
      )}
    </div>
  );
}

//new code
function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  //return (
   // <div className="App">
     // {
       // puppies.map((puppy) => {
            // return <p key={puppy.id}>{puppy.name}</p>;
          // })
     //  }
   // </div>
  //);
}

export default App;
