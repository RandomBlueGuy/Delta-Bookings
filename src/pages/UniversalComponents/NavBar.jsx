import React from "react";
import "./NavBar.css";
import iconB from "../../assets/Icons/delta-black.svg";
import iconW from "../../assets/Icons/delta.svg";
import userIcon from "../../assets/Icons/user.svg";
import menuIcon from "../../assets/Icons/menu.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import { useCookies } from "react-cookie";

function NavBar() {
  let location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["cookieToken"]);
  const [visibility, setVisibility] = useState(true);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const navigate = useNavigate();
  // const [isSpecialPath, setIsSpecialPath] = useState(false);
  const [trigger, setTrigger] = useState("0vw");
  // const specialPathsArr = [
  //   "/bookings",
  //   "/hotel-single",
  //   "/checkout-success",
  //   "/login",
  // ];

  useEffect(() => {
    // console.log("Cookie token changed:", cookies.cookieToken);
    // console.log("cookies.cookieToken", cookies.cookieToken)
  }, [cookies.cookieToken]);

  const handleLogout = () => {
    removeCookie("cookieToken");
  };

  const invalidPathsArr = ["/404-page-not-found"];
  // const cookies = new Cookies();

  // cookies.addChangeListener(cookieChanges);

  function cookieChanges() {
    // console.log("cookies NavBar have changed", cookies.get("token"));
  }

  useEffect(() => {
    invalidPathsArr
      .map((element) => element === location.pathname)
      .includes(true)
      ? setIsInvalidUrl(true)
      : setIsInvalidUrl(false);
  }, [location.pathname]);

  // useEffect(() => {
  //     .map((element) => element === location.pathname)
  //     .includes(true))
  //   if (
  //     specialPathsArr
  //       .map((element) => element === location.pathname)
  //       .includes(true)
  //   ) {
  //     setIsSpecialPath(true);
  //     setVisibility(true);
  //   } else {
  //     setIsSpecialPath(false);
  //     setVisibility(false);
  //   }
  // }, [location.pathname]);

  const triggerOpen = (event) => {
    event.preventDefault();
    setTrigger("90vw");
  };

  const triggerClose = (event) => {
    event.preventDefault();
    setTrigger("0vw");
  };

  // useEffect(() => {
  //   isSpecialPath ? setVisibility(true) : setVisibility(false);
  // }, []);

  // const toggleVisible = () => {
  //   if (isSpecialPath) {
  //     setVisibility(true);
  //   } else {
  //     document.documentElement.scrollTop > 100
  //       ? setVisibility(true)
  //       : setVisibility(false);
  //   }
  // };

  // window.addEventListener("scroll", toggleVisible);

  return (
    !isInvalidUrl && (
      <main>
        <section
          className="NavBar-container txt-color"
          style={{
            backgroundColor: visibility ? "white" : "transparent",
            boxShadow: visibility
              ? `0px 2px 5px rgba(43, 43, 43, 0.2)`
              : "none",
            // display: invalidUrl ? "none" : "flex",
          }}
        >
          <nav className="NavBar">
            <section className="nav-section">
              <Link to="/home">
                <img src={visibility ? iconB : iconW} alt="Delta" />
              </Link>
            </section>

            <section className="nav-desktop">
              <Link to="/home">
                <h2 style={{ color: visibility ? "black" : "white" }}>Home</h2>
              </Link>
              <Link to="/hotel-list/search?city=All&datein=&dateout=&guestnumber=1">
                <h2 style={{ color: visibility ? "black" : "white" }}>
                  Hotels
                </h2>
              </Link>
              <Link to="/about-us">
                <h2 style={{ color: visibility ? "black" : "white" }}>
                  About Us
                </h2>
              </Link>
            </section>

            <div className="user-related">
              <section className="accesibility">
                <select
                  name=""
                  id=""
                  className="coin"
                  style={{ color: visibility ? "black" : "white" }}
                >
                  <option value="">USD</option>
                  <option value="">COP</option>
                </select>
              </section>

              <section className="mobile__NavBtn">
                <div
                  id="mySidepanel"
                  style={{
                    width: trigger,
                    padding: trigger !== "0vw" ? "1rem" : "0",
                    opacity: trigger !== "0vw" ? "1" : "0",
                  }}
                  className="sidepanel"
                >
                  <div className="closebtn" onClick={triggerClose}>
                    <h2>Back →</h2>
                  </div>
                  <div className="mobile-menu-titles">
                    <h2>Navigation</h2>
                  </div>
                  <Link to="/" className="item-ctn">
                    <h2>Home</h2>
                  </Link>
                  <Link to="/hotel-list/search?city=All" className="item-ctn">
                    <h2>Hotel</h2>
                  </Link>
                  <Link to="/about-us" className="item-ctn">
                    <h2>About Us</h2>
                  </Link>

                  <div className="mobile-menu-titles">
                    <h2>Account</h2>
                  </div>
                  <Link to="/dashboard" className="item-ctn">
                    <h2>Profile</h2>
                  </Link>
                  <Link to="/admin-dashboard" className="item-ctn">
                    <h2>Admin Dashboard</h2>
                  </Link>
                  <Link to="/login" className="item-ctn">
                    <h2>Log In</h2>
                  </Link>
                  <Link to="/home" className="item-ctn" onClick={handleLogout}>
                    <h2>Log Out</h2>
                  </Link>
                  <Link to="/signup" className="item-ctn">
                    <h2>Sign-up</h2>
                  </Link>
                  <div className="mobile-menu-titles">
                    <h2>Accesibility</h2>
                  </div>
                  <div className="item-ctn" style={{ paddingLeft: "0.5rem" }}>
                    <h2>Coin:</h2>
                    <select name="" id="" className="coin">
                      <option value="">USD</option>
                      <option value="">COP</option>
                    </select>
                  </div>
                </div>
                <button className="dropdown square-icon" onClick={triggerOpen}>
                  <img
                    src={menuIcon}
                    alt="Delta"
                    style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                  />
                </button>
              </section>

              <div className="square-icon userManager">
                <img
                  src={userIcon}
                  alt="Delta"
                  style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                />
                <div className="dropdown-menu">
                  {cookies.cookieToken !== undefined && (
                    <Link to="/dashboard">
                      <div className="item-ctn">
                        <h4>Profile</h4>
                      </div>
                    </Link>
                  )}
                  {cookies.cookieToken !== undefined && (
                    <Link to="/admin-dashboard">
                      <div className="item-ctn">
                        <h4>Dashboard</h4>
                      </div>
                    </Link>
                  )}
                  {cookies.cookieToken === undefined &&<Link to="/signup">
                    <div className="item-ctn">
                      <h4>Sign Up</h4>
                    </div>
                  </Link>}
                  {cookies.cookieToken !== undefined && (
                    <Link to="/home">
                      <div className="item-ctn" onClick={handleLogout}>
                        <h4>Log out</h4>
                      </div>
                    </Link>
                  )}
                  {cookies.cookieToken === undefined && (
                    <Link to="/login">
                      <div className="item-ctn">
                        <h4>Log in</h4>
                      </div>
                    </Link>
                  )}

                </div>
              </div>
            </div>
          </nav>
        </section>
      </main>
    )
  );
}

export default NavBar;
