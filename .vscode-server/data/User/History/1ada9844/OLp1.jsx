import React, { useState } from "react";
import ContactList from "./components/ContactList";
// new code starts here 
//import SelectedContact from "./components/SelectedContact";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // original code here-starts 

  //return (
   // <div className="App">
      //<ContactList
       // selectedContactId={selectedContactId}
        //setSelectedContactId={setSelectedContactId}
      ///>
    //</div>
  //);
}
// original code here-stops

// new code starts here
return (
  <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList />
    )}
  </>
);
//}






