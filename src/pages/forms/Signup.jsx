import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // Update user profile with username
      await userCredential.user.updateProfile({
        displayName: username,
      });

      // Log the user in
      console.log("User signed up successfully:", userCredential.user);
    } catch (err) {
      setError(err.message);
      console.error("Error signing up:", err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignUp;
