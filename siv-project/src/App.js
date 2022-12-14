// import Navbar from "./components/Navbar"
import "./index.css";
import SignUp from "./components/Auth/SignUp";
// import Login from "./components/Auth/Login";
// import Footer from "./components/Footer";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Opportunities from "./components/Opportunities";
import Volunteers from "./components/Volunteers";
import About from "./components/About";
// import Modal from "./components/Auth/Modal/Modal";
// import SignInModal from "./components/Auth/Modal/AuthModal";
import LoginManager from "./components/Auth/LoginManager";
import CitiesContextProvider from "./context/citiesContext";
import Account from "./components/Account/Account";
import Organization from "./components/Organization/Organization";
//
function App() {
  return (
    <CitiesContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Index page */}
          <Route path="/" element={<Home />} />
          {/* Signup page */}
          <Route path="/signup" element={<SignUp />} />
          {/* SignIn page */}
          <Route path="/signin" element={<LoginManager />} />
          {/* About page */}
          <Route path="/about-us" element={<About />} />
          {/* Opportunities */}
          {/* <Route path="/opportunities" element={<Opportunities />} /> */}
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/account" element={<Account />} />
          <Route path="/organizations" element={<Organization />} />
          {/* <Route path="/volunteers" element={<Volunteers />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </CitiesContextProvider>
  );
}

export default App;