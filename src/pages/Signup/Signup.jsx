import React, { useState } from "react";
import "./Signup.css";
import fbIcon from "../../assets/Icons/facebookSI.svg";
import googleIcon from "../../assets/Icons/googleSI.svg";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
 
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
      setData({
        username: "",
        email: "",
        password: "",
      })
    } catch {
      alert("No existen datos adjuntos");
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(data["username"]);

  const { username, email, password } = data;
  return (
    <div className="signup-main-container">
      <main className="signup-card">
        <section className="signup">
          <h1>SIGN UP </h1>
          <p>Sign Up With</p>
          <div className="goto-social">
            <button>
              <img src={fbIcon} alt="" />
              Facebook
            </button>
            <button>
              <img src={googleIcon} alt="" />
              Google
            </button>
          </div>
        </section>
        <div className="social-distancing">
          <div className="social-distancing-line"></div>
          <p>OR</p>
        </div>
        <form className="signup__form" onSubmit={handleSubmit}>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            required
            placeholder="Enter your name"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            placeholder="Email Address"
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            minLength={8}
            required
            placeholder="Password"
            value={password}
            onChange={(e) => handleChange(e)}
          />

          <button className="createAcc-btn" type="submit">CREATE ACCOUNT</button>
        </form>
        <div className="social-distancing">
          <div className="social-distancing-line"></div>
          <p>OR</p>
        </div>
        <button className="loginBtn" >LOGIN</button>
      </main>
    </div>
  );
}
