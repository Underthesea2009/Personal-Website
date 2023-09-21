// src/components/ContactRow.jsx
//import React from "react";

//export default function ContactRow({ contact, setSelectedContactId }) {
 // return (
   // <tr
      //onClick={() => {
        //setSelectedContactId(contact.id);
      //}}
    //>
      //<td>{contact.name}</td>
      //<td>{contact.email}</td>
     // <td>{contact.phone}</td>
   // </tr>
  //);
//}

// new code starts 
import React, { useState } from "react";
import ContactRow from "./ContactRow";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const someContactData = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  };

  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <tbody>
          <ContactRow contact={someContactData} setSelectedContactId={setSelectedContactId} />
        </tbody>
      </table>
      <p>Selected Contact ID: {selectedContactId}</p>
    </div>
  );
}

export default App;



  
