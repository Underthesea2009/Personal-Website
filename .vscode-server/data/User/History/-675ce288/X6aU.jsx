import { useState, useEffect } from 'react';
import { puppyList } from './data.js';
import './App.css'; // Import your CSS for styling

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

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setPuppies(puppyList);
    }, 1000); // Simulate a 1-second delay for fetching data
  }, []);

  function App() {
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
  
    function handleClick() {
      // some logic here
    }
  
    return (
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p onClick={handleClick} key={puppy.id}>
              {puppy.name}
            </p>
          );
        })}
      </div>
    );
  }
  // new code 
  {()=>{console.log("puppy id: ", puppy.id)}}

return (
    <div className="App">
      <h1>Puppy List</h1>
      {puppies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <PuppyList puppies={puppies} />
      )}
    </div>
  );
}





export default App;

