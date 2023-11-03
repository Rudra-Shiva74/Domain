import { useState } from 'react';
import './App.css';
import Login from './Home/Login';
import Signup from './Home/Signup';
import Navbar from './Layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// const farmerdata = () => {
//   const farmerinfo = localStorage.getItem('farmer');
//   if (farmerinfo) {
//     return JSON.parse(farmerinfo);
//   }
// }
function App() {
  const [farmer, setFarmer] = useState({});
  return (
    <div>
      <Router>
        <Navbar farmer={farmer} />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
