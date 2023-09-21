import React, { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

//export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // new code-starts
  const handleClick = (contactId) => {
    setFeaturedContactId(contactId);
  };

  const featuredContact = ContactList.find((contact) => contact.id === featuredContactId);

  return (
    <div className="App">
      {ContactList.map((contact) => (
        <p onClick={() => handleClick(contact.id)} key={contact.id}>
          {contact.name}
        </p>
      ))}
      {featuredContact && (
        <div>
          <h2>{featuredContact.name}</h2>
          <ul>
            <li>Age: {featuredContact.age}</li>
            <li>Email: {featuredContact.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
//}

export default YourComponent
  
// new code-ends

  
return (
   <div className="App">
      <ContactList
       selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />
    </div>
  );
//}








