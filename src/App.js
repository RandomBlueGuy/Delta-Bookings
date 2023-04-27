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
import { CookiesProvider } from "react-cookie";
import { useJwt } from "react-jwt";
import PrivateRoutes from "./Utils/PrivateRoutes";
import WarningMessage from "./pages/UniversalComponents/WarningMessage";
import FloatingMessage from "./pages/UniversalComponents/FloatingMessage";

function App() {
  const { pathname } = useLocation();
  const [showWarning, setShowWarning] = useState(true);
  const warningTitle = "Warning Title";
  const warningMessage = "Warning Message";

  const onCloseWarning = () => {
    setShowWarning(false);
  };
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <UpButton />
      <NavBar />
      {/* {!showWarning && (
        <WarningMessage
          warningTitle={warningTitle}
          warningMessage={warningMessage}
          setShowWarning={setShowWarning}
        />
      )} */}      
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
        <Route element={<PrivateRoutes />}>
          <Route exact path="/dashboard" element={<UserDashBoard />} />
          <Route
            exact
            path='/admin-dashboard'
            element={<AdminDashBoardPage />}
          />
          <Route
            exact
            path='/checkout-failure'
            element={<CheckoutFailurePage />}
          />
          <Route
            exact
            path='/checkout-success'
            element={<CheckoutSuccessPage />}
          />
          <Route exact path="/bookings/:bkngcd" element={<Bookingpage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
