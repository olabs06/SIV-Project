import SignUpController from "./components/Auth/SignUp";
import Home from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CitiesContextProvider from "./context/citiesContext";
import Account from "./components/Account/Account";
import Notifications from "./components/Account/Notifications";
import CityDetails from "./components/Home/CityDetails";
import About from "./components/Account/About";
import Privacy from "./components/Account/Privacy";
import Welcome from "./components/Auth/Welcome";
import Login from "./components/Auth/Login";
import EditProfile from "./components/Account/EditProfile";
import OrganizationList from "./components/Home/OrganizationList";
import VerifyEmail from "./components/Auth/VerifyEmail";
import OrganisationDetails from "./components/Organization/OrganisationDetails";
import PageContextProvider from "./context/pageContext";

function App() {
  return (
    <CitiesContextProvider>
      <PageContextProvider>
        <BrowserRouter>
          <Routes>
            {/* Index page */}
            <Route path="/" element={<Home />} />
            {/* Signup page */}
            <Route path="/signup" element={<SignUpController />} />
            {/* SignIn page */}
            <Route path="/signin" element={<Login />} />
            {/* About page */}
            <Route path="/account" element={<Account />} />
            {/* <Route path="/organizations" element={<Organization />} /> */}
            <Route path="/account/notifications" element={<Notifications />} />
            <Route path="/account/about" element={<About />} />
            <Route path="/account/privacy-statement" element={<Privacy />} />
            <Route path="/city/" element={<CityDetails />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route
              path="/organisation-details"
              element={<OrganisationDetails />}
            />
            <Route path="/organisations" element={<OrganizationList />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </PageContextProvider>
    </CitiesContextProvider>
  );
}

export default App;
