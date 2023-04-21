import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const cookies = new Cookies();
  const [toggleVisible, setToggleVisible] = useState(true);
  const uIcon = <FontAwesomeIcon icon={faUser} />;
  const lIcon = <FontAwesomeIcon icon={faLock} />;
  const mIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const [errors, setErrors] = useState({});
  const [emailerr, setEmailerr] = useState({});
  const [data, setData] = useState({
    password: "",
    email: "",
    emailRecovery: "",
  });
  const { emailRecovery, password, email } = data;
  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  function toggleSecretSection() {
    setToggleVisible(!toggleVisible);
  }
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (email.trim() === "") {
      validationErrors.email = "Please Enter Your email";
    }
    if (password.trim() === "") {
      validationErrors.userPassword = "Please Enter Your Password";
    }
    setErrors(validationErrors);

    const logUser = async () => {
      const res = await axios
        .post("http://localhost:8080/auth/local/login", {
          email:email,
          password:password,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    logUser();
    if (Object.keys(validationErrors) === 0) {
    //   try {
    //     const { data } = await axios.post(
    //       "http://localhost:8080/auth/local/login",
    //       data
    //     );
    //     cookies.set("token", data.token);
    //     cookies.set("firstName", data.token.firstName);
    //     cookies.set("lastName", data.token.lastName);
    //     cookies.set("email", data.token.email);
    //   } catch (err) {
    //     alert("Something went wrong");
    //   }
    }else{
      console.log("HAY ERRORES MP")
    }
    
  };

  const handleEmail = (event) => {
    event.preventDefault();
    const validateEmail = {};
    if (email.trim() === "") {
      validateEmail.userEmail = "Please Enter Your Email";
    } else if (!emailRegex.test(email)) {
      validateEmail.userEmail = "Enter a Valid Email";
    }
    setEmailerr(validateEmail);
  };

  return (
    <main className="Login-ctn">
      <section className="Login-card">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="email" className="Login-normal-label" name="user">
            User:
          </label>
          <div className="form__line--login">
            <div className="Login-formbox">
              {uIcon}
              <input
                id="user-input"
                type="text"
                placeholder="Enter your email"
                className="Login-input-email"
                name="email"
                value={email}
                onChange={(event) => handleChange(event)}
              />
            </div>
            {errors.email && (
              <div className="error__display">{errors.email}</div>
            )}
          </div>
          <div className="form__line--login">
            <label htmlFor="password" className="Login-normal-label">
              Password:
            </label>
            <div className="pass-input-area">
              <div className="Login-formbox">
                {lIcon}
                <input
                  id="password-input"
                  name="password"
                  type="password"
                  placeholder={"Enter your password"}
                  value={password}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              {errors.userPassword && (
                <div className="error__display">{errors.userPassword}</div>
              )}
            </div>
          </div>
          <button className="Login-ctn-btn">Log In</button>
        </form>
        <button className="Login-special-btn" onClick={toggleSecretSection}>
          Forgot your password?
        </button>
        <div className="err__display__secret">
          <div
            className={
              toggleVisible
                ? "Login-secret-section"
                : "Login-secret-section-active"
            }
          >
            <div className="form__line--login">
              <label className="emailRecovery" htmlFor="recover-input">
                Write your Email here to reset your password
              </label>
              <div className="Login-formbox">
                {mIcon}
                <input
                  type="email"
                  name="emailRecovery"
                  id="emailRecovery"
                  value={emailRecovery}
                  placeholder="Enter your recovery email"
                  onChange={(event) => handleChange(event)}
                />
                <button className="email__recover" onClick={handleEmail}>
                  ✉
                </button>
              </div>
              {emailerr.userEmail && (
                <div
                  className="error__display"
                  style={{ display: toggleVisible ? "none" : "flex" }}
                >
                  {emailerr.userEmail}
                </div>
              )}
            </div>
          </div>
        </div>
        {emailerr.userEmail && (
          <span className="error">{emailerr.userEmail}</span>
        )}
        
        <div className="social-distancing">
          <div className="social-distancing-line"></div>
          <p>OR</p>
        </div>
        <Link to="/signup">
          <button className="Signin-ctn-btn">Sign Up</button>
        </Link>
      </section>
    </main>
  );
}
export default Login;
