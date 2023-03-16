import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  
  const [toggleVisible, setToggleVisible] = useState(true);
  const uIcon = <FontAwesomeIcon icon={faUser} />;
  const lIcon = <FontAwesomeIcon icon={faLock} />;
  const mIcon = <FontAwesomeIcon icon={faEnvelope} />;

  function toggleSecretSection() {
    setToggleVisible(!toggleVisible);
    console.log(toggleVisible);
  }

  return (
    <main className="Login-ctn">
      <section className="Login-card">
        <h1>Login</h1>
        <label htmlFor="user-input" className="Login-normal-label">
          User:
        </label>
        <div className="Login-formbox">
          {uIcon}
          <input
            id="user-input"
            type="text"
            placeholder={`Enter your password`}
            className="Login-input-username"
          />
        </div>
        <label htmlFor="password-input" className="Login-normal-label">
          Password:
        </label>
        <div className="pass-input-area">
          <div className="Login-formbox">
            {lIcon}
            <input
              id="password-input"
              type="password"
              placeholder={`Enter your password`}
            />
          </div>
          <button className="Login-special-btn" onClick={toggleSecretSection}>
            Forgot your password?
          </button>
        </div>

        <div
          className={
            toggleVisible
              ? "Login-secret-section"
              : "Login-secret-section-active"
          }
        >
          <div className='recovery-column'>
          <label className="Login-special-label" htmlFor="recover-input">
            Write your Email here to reset your password ;)
          </label>
            <div className="Login-formbox">
              {mIcon}
              <input
                id="recover-input"
                type="text"
                placeholder="Enter your recovery email"
              />
            </div>
          </div>
        </div>
        <button className="Login-ctn-btn">LOGIN</button>
      </section>
    </main>
  );
}

export default Login;
