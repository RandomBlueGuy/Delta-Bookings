import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [toggleVisible, setToggleVisible] = useState(true);
  const uIcon = <FontAwesomeIcon icon={faUser} />;
  const lIcon = <FontAwesomeIcon icon={faLock} />;
  const mIcon = <FontAwesomeIcon icon={faEnvelope} />;

  
  const [usuario, setUsuario] = useState({ campo: "", valido: null });
  const validarUsuario = (e) => {
    const regex = /^[a-zA-Z0-9]{4,16}$/;
    const valido = regex.test(e.target.value);
    setUsuario({ campo: e.target.value, valido: valido });
  };

  const [password, setPassword] = useState({campo: "", valido: null});
  const validarPassword = (e) => {
    const regexPassword = /^,{4,12}$/;
    const valido = regexPassword.test(e.target.value);
    setPassword({ campo: e.target.value, valido: valido });
  };

  const [email, setEmail] = useState({campo: "", valido: null});
  const validarEmail = (e) => {
    const regexEmail = /^[a-zA-Z09_.+-]+@[a-zA-Z09-]+\.[a-zA-Z09-.]+$/;
    const valido = regexEmail.test(e.target.value);
    setEmail({ campo: e.target.value, valido: valido });
  };


  function toggleSecretSection() {
    setToggleVisible(!toggleVisible);
    console.log(toggleVisible);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Esto evita que la página se recargue cuando se envía el formulario.
    // Aquí puedes hacer cualquier acción que desees con los datos del input.
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
