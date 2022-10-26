import  Navbar  from "./components/Navbar"
import './index.css';
// import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <SignUp /> */}
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
