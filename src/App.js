import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage'
import HotelList from './pages/HotelList/HotelListpage'
import Signuppage from './pages/Signup/Signuppage';
import './App.css';
import './pages/UniversalComponents/BaseStyles.css'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/XXX" element={<XXX />} /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
