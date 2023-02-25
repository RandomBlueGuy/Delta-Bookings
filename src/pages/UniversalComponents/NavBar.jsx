import React from "react";
import "./NavBar.css";
import icon from "../../assets/Icons/delta.svg";
import userIcon from "../../assets/Icons/user.svg";
import menuIcon from "../../assets/Icons/menu.svg";
import settingsIcon from "../../assets/Icons/settings.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar-container">
      <main className="NavBar">
        <section className="logo">
          <Link to="/">
            <img src={icon} alt="Delta" />
          </Link>
        </section>
        
        <section className="pages">
          <Link to="/">
            <h2>Home</h2>
          </Link>

          <Link to="/hotel-list">
            <h2>Hotels</h2>
          </Link>

          <a href="">
            <h2>About Us</h2>
          </a>
        </section>

        <section className="accesibility">
          <select name="" id="" className="coin">
            <option value="">USD</option>
            <option value="">COP</option>
          </select>

          <select name="" id="" className="language">
            <option value="">ESP</option>
            <option value="">ENG</option>
          </select>
        </section>

        <section className="mobile-functionality">
          <div className="menu-display">
            <img src={menuIcon} alt="Delta" />
          </div>

          <div className="menu-display">  
              <img src={userIcon} alt="" />
          </div>

          <div className="menu-display">
            <img src={settingsIcon} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default NavBar;
