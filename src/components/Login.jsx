import React from "react";
import "firebase/auth";
import app from "firebase";

function Login({ auth }) {
  const handleClick = () => {
    const provider = new app.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button className="sign-in" onClick={handleClick}>
      Sign in with Google
    </button>
  );
}

export default Login;
