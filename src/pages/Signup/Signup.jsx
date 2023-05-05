import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

export default function Signup() {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { username, email, password } = data;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [showUpdate, setShowUpdate] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (!username.trim()) {
      validationErrors.userName = "Please Enter Your Name";
    }

    if (!email.trim()) {
      validationErrors.userEmail = "Please Enter Your Email";
    } else if (!emailRegex.test(email.trim().replace(/\s+/g, ""))) {
      validationErrors.userEmail = "Enter a Valid Email";
    }

    if (!password.trim()) {
      validationErrors.userPassword = "Please Enter Your Password";
    } else if (!passwordRegex.test(password.trim().replace(/\s+/g, ""))) {
      validationErrors.userPassword =
        "Password Must Have This: 8 characters, a number, one uppercase letter and one lowercase letter";
    }
    setErrors(validationErrors);
    const createUserDB = async () => {
      const res = await axios
        .post(`${DB_URL}/auth/local/signup`, {
          fullName: username,
          email,
          password,
        })
    };

    if (Object.keys(validationErrors).length === 0) {
      setData({ username: "", email: "", password: "" });
      createUserDB();
      setShowUpdate(true);
    }
  };

  return (
    <div className='signup-main-container'>
      <FloatingMessage
        message='Congrats! now you are part of Delta Bookings! '
        setShowUpdate={setShowUpdate}
        showUpdate={showUpdate}
      />
      <main className='signup-card'>
        <section className='signup'>
          <h1>SIGN UP </h1>
          <p>Sign Up With</p>
        </section>
        <form className='signup__form' onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Full Name
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              placeholder='Enter your name'
              onChange={(event) => handleChange(event)}
            />
            {errors.userName && (
              <span className='error'>{errors.userName}</span>
            )}
          </label>

          <label htmlFor='email'>
            Email Address
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Email Address'
              onChange={(event) => handleChange(event)}
            />
            {errors.userEmail && (
              <span className='error'>{errors.userEmail}</span>
            )}
          </label>

          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(event) => handleChange(event)}
            />
            {errors.userPassword && (
              <span className='error'>{errors.userPassword}</span>
            )}
          </label>

          <button className='createAcc-btn' type='submit'>
            CREATE ACCOUNT
          </button>
        </form>
        <div className='social-distancing'>
          <div className='social-distancing-line'></div>
          <p>OR</p>
        </div>
        <button
          className='loginBtn'
          onClick={() => {
            return navigate("/login");
          }}
        >
          LOGIN
        </button>
      </main>
    </div>
  );
}
