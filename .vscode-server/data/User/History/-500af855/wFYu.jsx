import React from "react";
import SelectedContact from "./SelectedContact"; // Import the SelectedContact component

function App() {
  // Define a sample contact object
  const contact = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  };

  return (
    <div>
      <h1>My App</h1>
      {/* Pass the contact object as a prop to SelectedContact */}
      <SelectedContact contact={contact} />
    </div>
  );
}

//export default App;

// new code here 
// SelectedContact.jsx
import React from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  // Component logic here
  
  return (
    // JSX for displaying selected contact data
  );
};

export default SelectedContact;

