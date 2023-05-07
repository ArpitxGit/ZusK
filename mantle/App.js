import React from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import KYCVerification from "./KYCVerification";

function App() {
  return (
    <div className="App">
      <h1>ZusK Platform</h1>
      <h2>Register</h2>
      <RegistrationForm />
      <h2>KYC Verification</h2>
      <KYCVerification />
    </div>
  );
}

export default App;
