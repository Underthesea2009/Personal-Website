// Import statements (import the necessary components and data)
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

// Define your contacts array (you should replace this with your actual data)
const contacts = [
  { id: 1, name: "Contact 1", /* other contact data */ },
  { id: 2, name: "Contact 2", /* other contact data */ },
  // Add more contacts as needed
];

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
        <ContactList setSelectedContactId={setSelectedContactId} contacts={contacts} />
        // Pass the contacts array as a prop to the ContactList component */}
      )}
    </>
  );
}



