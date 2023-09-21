import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, contacts }) {
  // Change "selectedContact" to "contact" in the following line
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getDetail(id) {
      try {
        // Add a missing slash '/' in the URL
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`
        );
        const result = await response.json();
        console.log("Contact list results", result);
        setContact(result);
      } catch (error) {
        console.error("useEffect Error!", error);
      }
    }

    // Call getDetail with the selectedContactId when the component mounts
    if (selectedContactId) {
      getDetail(selectedContactId);
    }
  }, [selectedContactId]); // Make sure to include selectedContactId as a dependency

  return (
    <div>
      <h2>Contact Details</h2>
      {/* Check if "contact" is not null before accessing its properties */}
      {contact ? (
        <div>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
}


