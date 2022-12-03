// import Navbar from "./components/Navbar"
import "./index.css";
import SignUp from "./components/Auth/SignUp";
// import Login from "./components/Auth/Login";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import VerifyEmail from "./components/Auth/VerifyEmail";
import ForgotPassword from "./components/Auth/ForgotPassword";
import NewPassword from "./components/Auth/NewPassword";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Opportunities from "./components/Opportunities";
import Volunteers from "./components/Volunteers";
import About from "./components/About";
import Modal from "./components/Auth/Modal/Modal";
import { SignInModal, SignUpModal } from "./components/Auth/Modal/AuthModal";
import LoginManager from "./components/Auth/LoginManager";
//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Index page */}
        <Route path="/" element={<Home />} />
        {/* placeholder
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/finish" element={<Modal />} />
        <Route path="/signin-modal" element={<SignInModal />} />
        <Route path="/signup-modal" element={<SignUpModal />} /> */}
        {/* Signup page */}
        <Route path="/signup" element={<SignUp />} />
        {/* SignIn page */}
        <Route path="/signin" element={<LoginManager />} />
        {/* About page */}
        <Route path="/about-us" element={<About />} />
        {/* Opportunities */}
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/volunteers" element={<Volunteers />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;