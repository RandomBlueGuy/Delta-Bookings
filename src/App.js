import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import HotelList from "./pages/HotelList/HotelListpage";
import Signuppage from "./pages/Signup/Signuppage";
import "./App.css";
import "./pages/UniversalComponents/BaseStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Bookingpage from "./pages/Bookings-Checkouts/Bookingpage";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/XXX" element={<XXX />} /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/booking" element={<Bookingpage />} />
      </Routes>
    </div>
  );
}

export default App;
