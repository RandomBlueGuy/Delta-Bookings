import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import FloatingMessage from "../UniversalComponents/FloatingMessage";

function Login() {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [cookies, setCookie] = useCookies(["cookieToken", "cookieName"]);
  const [toggleVisible, setToggleVisible] = useState(true);
  const uIcon = <FontAwesomeIcon icon={faUser} />;
  const lIcon = <FontAwesomeIcon icon={faLock} />;
  const mIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const [next, setNext] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailerr, setEmailerr] = useState({});
  const [message, setMessage] = useState("")
  const [logUser, setLogUser] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState({
    password: "",
    email: "",
    emailRecovery: "",
  });
  const { emailRecovery, password, email } = data;
  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  const navigate = useNavigate();

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

  useEffect(() => {
    if (next) {
      navigate("/home");
      setNext(false);
    }
  }, [cookies.cookieToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Please Enter Your email";
    }
    if (!password.trim()) {
      validationErrors.userPassword = "Please Enter Your Password";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLogUser(true);
      axios
        .post(`${DB_URL}/auth/local/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setShowUpdate(true);
          setCookie("cookieToken", response.data.token, { path: "/" });
          setCookie("cookieName", response.data.data.fullName, { path: "/" });
        })
        .catch(() => {
          setMessage("Invalid Email or Password")
          setShowUpdate(true)});
    }
    setNext(true);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    const validateEmail = {};
    
    if (emailRecovery.trim() === "") {
      validateEmail.userEmailRecovery = "Please Enter Your Email";
    } else if (!emailRegex.test(emailRecovery)) {
      validateEmail.userEmailRecovery = "Enter a Valid Email";
    }
    setEmailerr(validateEmail);
    console.log("error", validateEmail)
    if(Object.keys(validateEmail).length === 0){
      console.log("nicely done");
      axios.post(`${DB_URL}/api/users/recover`, {email: emailRecovery})
      .then(() => {
        setMessage("we are sending you an email with a provisional password.")
        setShowUpdate(true)})
    }
  };

  return (
    <main className="Login-ctn">
      {showUpdate && (
        <FloatingMessage
          message={message}
          setShowUpdate={setShowUpdate}
          showUpdate={showUpdate}
        />
      )}
      <section className="Login-card">
        <form>
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
          <button
            className="Login-ctn-btn"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Log In
          </button>
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
