import React from "react";
import SelectedContact from "./SelectedContact"; // Import the SelectedContact component

function App() {
   Define a sample contact object
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

export default App;

//new code here 
//SelectedContact.jsx
//import React from 'react';

//const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  //Component logic here
  
  //return (
    // JSX for displaying selected contact data
//);

//};

//export default SelectedContact;

// new code start here 
//import React, { useState, useEffect } from "react";

//export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  //const [contact, setContact] = useState(null);

 // useEffect(() => {
    //async function fetchContact() {
     // try {
       // const response = await fetch(
        //  `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
       // );
        //const result = await response.json();
        //setContact(result);
      //} catch (error) {
      //  console.error(error);
     // }
    //}
   // fetchContact();
 // }, [selectedContactId]);

 // return (
    //<div>
     // <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      //{contact ? (
        //<div>
         // <h2>Contact Details</h2>
         // <p>Name: {contact.name}</p>
          //<p>Email: {contact.email}</p>
          //<p>Phone: {contact.phone}</p>
        //</div>
     // ) : (
       // <p>Loading...</p>
      //)}
   // </div>
 // );
//}


