import React, { useState } from "react";
import "./Signup.css";
import fbIcon from "../../assets/Icons/facebookSI.svg";
import googleIcon from "../../assets/Icons/googleSI.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, tel, password });
    setEmail("");
    setTel("");
    setUsername("");
    setPassword("");
  };

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
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="tel">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            minLength={8}
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="createAcc-btn">CREATE ACCOUNT</button>
        </form>
        <div className="social-distancing">
          <div className="social-distancing-line"></div>
          <p>OR</p>
        </div>
        <button className="loginBtn">LOGIN</button>
      </main>
    </div>
  );
}
