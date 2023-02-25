import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home/Homepage'
import HotelList from './pages/HotelList/HotelListpage'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        {/* <Route exact path="/XXX" element={<XXX />} /> */}
      </Routes>
    </div>
  );
}

export default App;
