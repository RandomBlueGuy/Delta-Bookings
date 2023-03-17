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

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Datos enviados:', event.target.input.value);
  }

  return (
    <main className="Login-ctn">
      <section className="Login-card">
        <h1>Login</h1>
        <label htmlFor="user-input" className="Login-normal-label" name="user">
          User:
        </label>
        <div className="Login-formbox" onSubmit={handleSubmit}>
          {uIcon}
          <input
            id="user-input"
            type="text"
            placeholder={`Enter your Username`}
            className="Login-input-username"
            name="user-input"
            value={usuario.campo}
            onChange={validarUsuario}
            required
          />
          {usuario.valido === false && (
            <p className="error">{usuario.leyendaError}</p>
          )}
        </div>
        <label htmlFor="password-input" className="Login-normal-label">
          Password:
        </label>
        <div className="pass-input-area">
          <div className="Login-formbox" onSubmit={handleSubmit}>
            {lIcon}
            <input
              id="password-input"
              name="password-input"
              type="password"
              placeholder={`Enter your password`}
              value={password.campo}
              onChange={validarPassword}
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
          <div className="recovery-column">
            <label className="Login-special-label" htmlFor="recover-input">
              Write your Email here to reset your password ;)
            </label>
            <div className="Login-formbox">
              {mIcon}
              <input
                type="email"
                name="recover-input"
                id="recover-input"
                value={email}
                placeholder="Enter your recovery email"
                oncChange={validarEmail}
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
