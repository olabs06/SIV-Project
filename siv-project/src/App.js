// import Navbar from "./components/Navbar"
import './index.css';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn";
// import Footer from "./components/Footer";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom"

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
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
