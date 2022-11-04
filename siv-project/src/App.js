// import Navbar from "./components/Navbar"
import './index.css';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn";
// import Footer from "./components/Footer";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Opportunities from './components/Opportunities';
import Volunteers from './components/Volunteers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Index page */}
        <Route path="/" element={<Home />} />
        {/* Signup page */}
        <Route path="/signup" element={<SignUp />} />
        {/* Signin page */}
        <Route path="/signin" element={<SignIn />} />
        {/* Opportunities */}
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
