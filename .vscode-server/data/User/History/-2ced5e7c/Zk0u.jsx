import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Contact list results", result);
        setContacts(result);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("useEffect Error!", error);
        setError(error); // Set the error state
        setLoading(false); // Set loading to false on error as well
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {loading ? (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <ContactRow
                  key={contact.id}
                  contact={contact}
                  setSelectedContactId={setSelectedContactId}
                />
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

ContactList.propTypes = {
  setSelectedContactId: PropTypes.func.isRequired,
};



