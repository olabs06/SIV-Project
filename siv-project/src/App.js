import  Navbar  from "./components/Navbar"
import './index.css';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
