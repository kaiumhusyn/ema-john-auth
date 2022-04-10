import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [CreateUserWithEmailAndPassword, hookerror, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== ConfirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be six char longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);

    CreateUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sigh Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error || hookerror}</p>
          <div className="input-group">
            <label htmlFor="Confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="Confirm-password"
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already Have an account {""}
          <Link className="form-link" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
