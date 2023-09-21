// App.jsx
import React, { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

// new code here 
// App.jsx
import React, { useState } from 'react';
import SelectedContact from './components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Other App component logic

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        {/* Render your contact list component here */}
      )}
    </div>
  );
}

//export default App;





