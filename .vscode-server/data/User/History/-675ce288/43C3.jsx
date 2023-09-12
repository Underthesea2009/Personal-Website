// src/App.jsx
// line 3-22
//import React, { useState } from 'react';
//import { puppyList } from './data.js';

//function App() {
  //const [puppies, setPuppies] = useState(puppyList);

 // console.log("puppyList: ", puppyList);

  //return (
   // <div className="App">
     // {
       // puppies.map((puppy) => {
          //return <p key={puppy.id}>{puppy.name}</p>;
       // })
     // }
   // </div>
 // );
//}

//export default App;

// new code start
// line 26-59
import React, { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

