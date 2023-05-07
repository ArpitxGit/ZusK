import React, { useState } from "react";
import { web3, zuskContract } from "./ethereum";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");

  const registerUser = async () => {
    const accounts = await web3.eth.getAccounts();
    await zuskContract.methods
      .registerEndUser(name, personalInfo)
      .send({ from: accounts[0] });
    alert("Registration complete");
  };

  return (
    <form>
      {/* Add form fields and handlers for name and personalInfo */}
      <button type="button" onClick={registerUser}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
