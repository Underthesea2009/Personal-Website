// SignUpForm.jsx-2
import { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


// SignUpForm.jsx-1
export default function SignUpForm() {
    return <h2>Sign Up!</h2>;

}

// SignUpForm.jsx-3
<form>
  <label>
    Username: <input />
  </label>
  <label>
    Password: <input />
  </label>
  <button>Submit</button>
</form>

// SignUpForm.jsx-4
<input value={username} onChange={(e) => setUsername(e.target.value)} />
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

// SignUpForm.jsx-5
async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");
  }

  // SignUpForm.jsx-6
<form onSubmit={handleSubmit}>...


// SignUpForm.jsx
async function handleSubmit(event) {
  event.preventDefault();

  try {
    // ... Fetch request and error handling here
  } catch (error) {
    setError(error.message);
  }
}

// SignUpForm.jsx
<>
  <h2>Sign Up</h2>
  {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    {/* ... Rest of the form */}
  </form>
</>

// SignUpForm.jsx
async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
    // ... Rest of the fetch request
  } catch (error) {
    setError(error.message);
  }
}


// SignUpForm.jsx
async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    // ... Rest of the fetch request
  } catch (error) {
    setError(error.message);
  }
}

// SignUpForm.jsx
async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    setError(error.message);
  }
}





  


  

  
