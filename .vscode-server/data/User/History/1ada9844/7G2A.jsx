import React from "react";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

// new code 
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Define a function to close the selected contact view
  const closeSelectedContact = () => {
    setSelectedContactId(null);
  };

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          contact={contacts.find((contact) => contact.id === selectedContactId)}
          onClose={closeSelectedContact}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}


