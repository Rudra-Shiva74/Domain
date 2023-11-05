import { useState } from 'react';
import './App.css';
import Login from './Home/Login';
import Signup from './Home/Signup';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Layout/Home';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0)
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
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/signup' element={<Signup setProgress={setProgress} />} />
        </Routes>
        <Footer />
      </Router >
    </div>
  );
}

export default App;
