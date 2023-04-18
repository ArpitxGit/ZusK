import React, { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setId("ZK101");
    alert(`Your id is ${id}`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <h1>ZusK</h1>
      <p>
        A zero user knowledge onboarding and authentication portal for telecom
        network providers
      </p>
      <button onClick={handleRegisterClick}>Register</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Country:
            <input type="text" value={country} onChange={handleCountryChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
