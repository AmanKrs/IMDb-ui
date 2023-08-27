import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register(props) {
  const navigate = useNavigate();
  const [userformData, setUserformData] = useState();

  const handleInputSignup = (e) => {
    setUserformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(userformData);
  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8084/login/signup",
        userformData
      );
      console.log(res);
      if (res.status === 200) {
        props.setReg(true);
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 409) {
        console.log(e.response.data.msg);
      } else if (e.response.status === 403) {
        console.log(e.response.data.msg);
      } else {
        console.log(e.code);
      }
    }
  };

  return (
    <div className="mainregister">
      <div className="registerbox">
        <div className="login-form-box">
          <h3>Create your Account</h3>
          <div className="loginform">
            <label>userId</label>
            <input
              name="userId"
              type="text"
              placeholder="create your unique userid"
              className="formvalue"
              onChange={handleInputSignup}
            ></input>
          </div>
          <div className="loginform">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your Full Name"
              className="formvalue"
              onChange={handleInputSignup}
            ></input>
          </div>
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
            <button onClick={handleRegister} className="ftr-signup-btn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
