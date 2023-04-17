import React from "react";
import "./NavBar.css";
import iconB from "../../assets/Icons/delta-black.svg";
import iconW from "../../assets/Icons/delta.svg";
import userIcon from "../../assets/Icons/user.svg";
import menuIcon from "../../assets/Icons/menu.svg";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie/cjs/Cookies";

function NavBar() {
  const cookies = new Cookies();
  let location = useLocation();
  const [visibility, setVisibility] = useState(true);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [isSpecialPath, setIsSpecialPath] = useState(false);
  const [trigger, setTrigger] = useState("0px");
  const specialPathsArr = [
    "/bookings",
    "/hotel-single",
    "/checkout-success",
    "/login",
  ];
  const invalidPathsArr = ["/404-page-not-found"];

  useEffect(() => {
    invalidPathsArr
      .map((element) => element === location.pathname)
      .includes(true)
      ? setIsInvalidUrl(true)
      : setIsInvalidUrl(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    cookies.remove("token");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("email");
    return <Navigate to='' />;
  };

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
    setTrigger("90%");
  };

  const triggerClose = (event) => {
    event.preventDefault();
    setTrigger("0px");
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
          className='NavBar-container txt-color'
          style={{
            backgroundColor: visibility ? "white" : "transparent",
            boxShadow: visibility
              ? `0px 2px 5px rgba(43, 43, 43, 0.2)`
              : "none",
            // display: invalidUrl ? "none" : "flex",
          }}
        >
          <nav className='NavBar'>
            <section className='nav-section'>
              <Link to='/home'>
                <img src={visibility ? iconB : iconW} alt='Delta' />
              </Link>
            </section>

            <section className='nav-desktop'>
              <Link to='/home'>
                <h2 style={{ color: visibility ? "black" : "white" }}>Home</h2>
              </Link>
              <Link to='/hotel-list/search?city=All'>
                <h2 style={{ color: visibility ? "black" : "white" }}>
                  Hotels
                </h2>
              </Link>
              <Link to='/about-us'>
                <h2 style={{ color: visibility ? "black" : "white" }}>
                  About Us
                </h2>
              </Link>
            </section>

            <div className='user-related'>
              <section className='accesibility'>
                <select
                  name=''
                  id=''
                  className='coin'
                  style={{ color: visibility ? "black" : "white" }}
                >
                  <option value=''>USD</option>
                  <option value=''>COP</option>
                </select>
              </section>

              <section className='mobile__NavBtn'>
                <div
                  id='mySidepanel'
                  style={{
                    width: trigger,
                    padding: trigger !== "0px" ? "1rem" : "0",
                  }}
                  className='sidepanel'
                >
                  <div className='closebtn' onClick={triggerClose}>
                    <h2>Back →</h2>
                  </div>
                  <div className='mobile-menu-titles'>
                    <h2>Navigation</h2>
                  </div>
                  <Link to='/' className='item-ctn'>
                    <h2>Home</h2>
                  </Link>
                  <Link to='/hotel-list/search?city=All' className='item-ctn'>
                    <h2>Hotel</h2>
                  </Link>
                  <Link to='/about-us' className='item-ctn'>
                    <h2>About Us</h2>
                  </Link>

                  <div className='mobile-menu-titles'>
                    <h2>Account</h2>
                  </div>
                  <Link to='/dashboard' className='item-ctn'>
                    <h2>Profile</h2>
                  </Link>
                  <Link to='/admin-dashboard' className='item-ctn'>
                    <h2>Admin Dashboard</h2>
                  </Link>
                  <Link to='/' className='item-ctn'>
                    <h2>Log In</h2>
                  </Link>
                  <Link to='/' className='item-ctn'>
                    <h2 onClick={handleLogout}>Log Out</h2>
                  </Link>
                  <Link to='/signup' className='item-ctn'>
                    <h2>Sign-up</h2>
                  </Link>
                  <div className='mobile-menu-titles'>
                    <h2>Accesibility</h2>
                  </div>
                  <div className='item-ctn' style={{ paddingLeft: "0.5rem" }}>
                    <h2>Coin:</h2>
                    <select name='' id='' className='coin'>
                      <option value=''>USD</option>
                      <option value=''>COP</option>
                    </select>
                  </div>
                </div>
                <button className='dropdown square-icon' onClick={triggerOpen}>
                  <img
                    src={menuIcon}
                    alt='Delta'
                    style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                  />
                </button>
              </section>

              <div className='square-icon userManager'>
                <img
                  src={userIcon}
                  alt='Delta'
                  style={{ filter: visibility ? "invert(0)" : "invert(1)" }}
                />
                <div className='dropdown-menu'>
                  <Link to='/dashboard'>
                    <div className='item-ctn'>
                      <h4>Profile</h4>
                    </div>
                  </Link>
                  <Link to='/admin-dashboard'>
                    <div className='item-ctn'>
                      <h4>Dashboard</h4>
                    </div>
                  </Link>
                  <Link to='/login'>
                    <div className='item-ctn'>
                      <h4>Log in</h4>
                    </div>
                  </Link>
                  <Link to='/signup'>
                    <div className='item-ctn'>
                      <h4>Log out</h4>
                    </div>
                  </Link>
                  <Link to='/signup'>
                    <div className='item-ctn'>
                      <h4>Sign In</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </section>
        {/* <section className="NavBar__dropdownCtn">
          <div className="NavBar__groupings ctn__g1">
            <h3>
              <i>...Looking for a hotel?</i>
            </h3>

            <Link to="/dashboard">
              <h2>dashboard</h2>
            </Link>
            <Link to="/hotel-single">
              <h2>hotel single</h2>
            </Link>

            <Link to="/checkout-success">
              <h2>Check Out Success</h2>
            </Link>
            <Link to="/checkout-failure">
              <h2>Check Out Failure</h2>
            </Link>
            <Link to="/checkout">
              <h2>Check out</h2>
            </Link>

            <Link to="/admin-dashboard">
              <h2>Admin Dashboard</h2>
            </Link>
            <Link to="/404-page-not-found">
              <h2>404</h2>
            </Link>
            <Link to="/bookings">
              <h2>Booking</h2>
            </Link>
          </div>
          <div className="NavBar__groupings ctn__g2">
            <h3>
              <i>User related...</i>
              <Link to="/signup">
                <h2>Sign Up</h2>
              </Link>
            </h3>
          </div>
        </section> */}
      </main>
    )
  );
}

export default NavBar;
