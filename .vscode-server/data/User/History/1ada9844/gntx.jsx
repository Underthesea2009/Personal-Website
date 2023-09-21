import React, { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  
return (
   <div className="App">
      <ContactList
       selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
      />
    </div>
  );
}








