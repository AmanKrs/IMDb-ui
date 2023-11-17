import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [userloginData, setUserloginData] = useState({});

  const handleInputSignup = (e) => {
    setUserloginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8084/login/signin",
        userloginData
      );
      if (res.status === 200) {
        localStorage.setItem("token", "token");
        navigate("/");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(userloginData);
  return (
    <div className="mainlogin">
      <div className="loginbox">
        <div className="login-form-box">
          <h3>Sign in</h3>
          <div className="loginform">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="formvalue"
              onChange={handleInputSignup}
            ></input>
          </div>
          <div className="loginform">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your email address"
              className="formvalue"
              onChange={handleInputSignup}
            ></input>
          </div>

          <div>Sign In with Google</div>
          <div>
            <button onClick={handleLogin} className="ftr-signup-btn">
              Sign in
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="history">history</div>
      </div>
    </div>
  );
}
