import React, { useState } from "react";
import "./Signup.css";

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

    <div className="signup-container">
        <main className="container">
            <section className="signup">
                <h1>SIGN UP </h1>
                <h3>Sign Up With</h3>
                <div className="goto-fa-go">
                    <button className="facebook">Facebook</button>
                    <button className="google">Google</button>
                </div>
            </section>
            <div className="separador">
                <div className="line"></div>
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
                placeholder="Full Name"
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
                
                <button className="signupBtn">CREATE ACCOUNT</button>
                
            </form>
            <div className="separador">
                <div className="line"></div>
                <p>OR</p>
            </div>
            <button className="loginBtn">LOGIN</button>

        </main>
    </div>
  );
}
