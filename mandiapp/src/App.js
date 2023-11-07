import { useState } from 'react';
import './App.css';
import Login from './Home/Login';
import Signup from './Home/Signup';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Privateroute from './Farmer/Privateroute.js';
import { isLoggedIn } from './Auth';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Layout/Home';
import LoadingBar from 'react-top-loading-bar'
import DashBoard from './Farmer/DashBoard';

function App() {
  const [progress, setProgress] = useState(0)
  console.log(isLoggedIn());
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='red'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/login`} element={<Login />} />
          <Route exact path={`/signup`} element={<Signup setProgress={setProgress} />} />
          <Route exact path="/farmer" element={<Privateroute />}>
            <Route exact path={`dashboard`} element={<DashBoard />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router >
    </div>
  );
}

export default App;
