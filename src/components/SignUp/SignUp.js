import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sigh Up</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
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
