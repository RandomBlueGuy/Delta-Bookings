import "./App.css";
import "./pages/UniversalComponents/BaseStyles.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import HotelList from "./pages/HotelList/HotelListpage";
import Signuppage from "./pages/Signup/Signuppage";
import Bookingpage from "./pages/Bookings-Checkouts/Bookingpage";
import Page404 from "./pages/404/Page404";
import NavBar from "./pages/UniversalComponents/NavBar";
import Footer from "./pages/UniversalComponents/Footer";
import UpButton from "./pages/UniversalComponents/UpButton";
import AboutUspage from "./pages/AboutUs/AboutUspage";
import Hotelsingle from "./pages/HotelSingle/Hotelsingle";
import UserDashBoard from "./pages/DashBoard/DashboardPage";
import CheckoutPage from "./pages/Bookings-Checkouts/CheckoutPage";
import React, { useEffect, useState } from "react";
import "./App.css";
import CheckoutSuccessPage from "./pages/Bookings-Checkouts/CheckoutSuccessPage";
import CheckoutFailurePage from "./pages/Bookings-Checkouts/CheckoutFailurePage";
import Login from "./pages/Login/Login";
import AdminDashBoardPage from "./pages/AdminDashboard/AdminDashboardPage";
import { useJwt } from "react-jwt";
import PrivateRoutes from "./Utils/PrivateRoutes";
import { useCookies } from "react-cookie";

function App() {
  const { pathname } = useLocation();
  const [cookies] = useCookies(["cookieToken"]);
  const [auth, setAuth] = useState();
  let decode = useJwt(cookies.cookieToken);
  const [role, setRole] = useState("");

  useEffect(() => {
    setAuth(() => cookies.cookieToken);
  }, [cookies.cookieToken]);

  useEffect(() => {
    if (auth) {
      const role = decode?.decodedToken?.role;
      setRole(role);
    }
  }, [auth]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <UpButton />
      <NavBar role={role} />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/hotel-list/:search" element={<HotelList />} />
        <Route exact path="/hotel-single/:htlnfo" element={<Hotelsingle />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/*"
          element={<Navigate to="/404-page-not-found" />}
        />
        <Route exact path="/404-page-not-found" element={<Page404 />} />
        <Route exact path="/about-us" element={<AboutUspage />} />
        <Route element={<PrivateRoutes auth={auth} />}>
          <Route exact path="/dashboard" element={<UserDashBoard />} />
          <Route
            exact
            path="/admin-dashboard"
            element={<AdminDashBoardPage role={role} />}
          />
          <Route
            exact
            path="/checkout-failure"
            element={<CheckoutFailurePage />}
          />
          <Route
            exact
            path="/checkout-success/:scss"
            element={<CheckoutSuccessPage />}
          />
          <Route exact path="/bookings/:bkngcd" element={<Bookingpage />} />
          <Route exact path="/checkout/" element={<CheckoutPage />} />
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
