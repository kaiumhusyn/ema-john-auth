import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">This is login</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Emazon{" "}
          <Link className="form-link" to="/signup">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
