import React from "react";

export default function SelectedContact({ contact, onClose }) {
  return (
    <div>
      <h2>Contact Details</h2>
      <button onClick={onClose}>Close</button>
      <ul>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
        {/* Add more contact details as needed */}
      </ul>
    </div>
  );
}
