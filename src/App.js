import "./App.css";
import "./pages/UniversalComponents/BaseStyles.css";
import { Route, Routes } from "react-router-dom";
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
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "./App.css";
import CheckoutSuccessPage from "./pages/Bookings-Checkouts/CheckoutSuccessPage";
import Login from "./pages/Login/Login";
// - URL
// - protocol -   subDomain -  Domain        -   Extension      -  path       - params/slugs/opt - search params
// - http:    - classroom   -  make it real  -    .   -  camp  - /dashboard  -  /users ? name=jhon&id=1234

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <div>
      <UpButton />
      <NavBar />
      <Routes>
        {/* <Route exact path="/XXX" element={<XXX />} /> */}

        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/bookings" element={<Bookingpage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route
          exact
          path="/checkout-success"
          element={<CheckoutSuccessPage />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/*"
          element={<Navigate to="/404-page-not-found" />}
        />
        <Route exact path="/404-page-not-found" element={<Page404 />} />
        <Route exact path="/about-us" element={<AboutUspage />} />
        <Route exact path="/dashboard" element={<UserDashBoard />} />
        <Route exact path="/hotel-single/:id" element={<Hotelsingle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
