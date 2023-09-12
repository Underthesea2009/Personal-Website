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
const [featPupId, setFeatPupId] = useState(null);
{puppies.map((puppy) => {
  return (
    <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
      {puppy.name}
    </p>
  );
})}
{featPupId && <p>{featPupId}</p>}
const featuredPup = puppies.find((pup) => pup.id === featPupId);
{featPupId && (
  <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
  </div>
)}
