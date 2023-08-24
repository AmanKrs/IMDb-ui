import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="mainlogin">
      <div className="loginbox">
        <div className="login-form-box">
          <h3>Sign in</h3>
          <div className="loginform">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="formvalue"
            ></input>
          </div>
          <div className="loginform">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="formvalue"
            ></input>
          </div>

          <div>Sign In with Google</div>
        </div>
        <div className="divider"></div>
        <div className="history">Hello</div>
      </div>
    </div>
  );
}
