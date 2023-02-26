import React from "react";
import "./NavBar.css";
import icon from "../../assets/Icons/delta-black.svg";
import userIcon from "../../assets/Icons/user.svg";
import menuIcon from "../../assets/Icons/menu.svg";
import settingsIcon from "../../assets/Icons/settings.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <main className="NavBar-container">
      <nav className="NavBar">
        <section className="nav-section">
          <Link to="/">
            <img src={icon} alt="Delta" />
          </Link>
        </section>

        <section className="nav-section">
          <div class="dropdown">
            <img src={userIcon} alt="Delta" />
            <ul class="dropdown-menu">
              <li>
                <h2>Log In</h2>
              </li>
              <li>
                <h2>Sign In</h2>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </main>
  );
}

export default NavBar;
