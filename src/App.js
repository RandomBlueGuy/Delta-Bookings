import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import HotelList from "./pages/HotelList/HotelListpage";
import Signuppage from "./pages/Signup/Signuppage";
import "./pages/UniversalComponents/BaseStyles.css";
import Bookingpage from "./pages/Bookings-Checkouts/Bookingpage";
import Page404 from "./pages/404/Page404";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/XXX" element={<XXX />} /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/bookings" element={<Bookingpage />} />
        <Route exact path="/404-page-not-found" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
