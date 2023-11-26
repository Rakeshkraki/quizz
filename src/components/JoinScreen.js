import React, { useState } from "react";
import "./joinScreen.css";

function JoinScreen({ start }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Reset the name error message when the user starts typing again
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset the email error message when the user starts typing again
    setEmailError("");
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      setEmailError("Email cannot be empty.");
    } else if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear the error message when email is valid
    }
  };

  const startButtonClick = () => {
    validateEmail();
    // Check if there is an error message for the email field
    if (!emailError) {
      // Email is valid, proceed with the start action
      start();
    }
  };

  return (
    <div className="join-screen">
      <h2>Login to Start</h2>
      <div>
        <label htmlFor="name"></label>
        <br></br>
        <input
          className="box1"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <div className="error-message">{nameError}</div>
      </div>
      <div>
        <label htmlFor="email"></label>
        <br></br>
        <input
          className="box2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail} // Validate email on blur (when focus is lost)
        />
        <div className="error-message">{emailError}</div>
      </div>
      <div></div>
      <button onClick={startButtonClick}>Start</button>
    </div>
  );
}

export default JoinScreen;
