// new code 
import React from "react";

export default function SelectedContact({ selectedContactId, contacts }) {
  // Find the selected contact by its ID
  const selectedContact = contacts.find(contact => contact.id === selectedContactId);

  if (!selectedContact) {
    return <div>Select a contact to view details</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {selectedContact.name}</p>
      <p><strong>Email:</strong> {selectedContact.email}</p>
      <p><strong>Phone:</strong> {selectedContact.phone}</p>
      {/* Add more details as needed */}
    </div>
  );
}

