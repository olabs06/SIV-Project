import logo from "../assets/images/logo-SIV-transparent-background 1.svg"
import { Link } from "react-router-dom"

const Navbar = ({ page }) => {
  return (
    // navbar
    <nav className="bg-white w-full px-16 py-4 border-b-2 border-blue-background font-lato">

      {/* wrapper */}
      <div className="flex flex-row container mx-auto justify-between items-center px-8">

        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="cursor-pointer h-12" />
        </Link>

        {/* options */}
        <ul className="items-center cursor-pointer flex justify-center text-blue-dark font-bold capitalize">
          <Link to="/opportunities"><li className="p-2 mr-4 leading-8 text-xl">opportunities</li></Link>
          <li className="p-2 mr-4 leading-8 text-xl">volunteers</li>
          <li className="p-2 mr-4 leading-8 text-xl">organizations</li>
          <li className="p-2 mr-4 leading-8 text-xl">about</li>
        </ul>

        {page === "home" && <div className="flex">
          <Link to="/signin"><button className="h-12 shadow text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold capitalize flex justify-center items-center leading-8 px-4 ml-6">sign in</button></Link>
          <Link to="/signup"><button className="h-12 shadow text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold capitalize flex justify-center items-center leading-8 px-4 ml-6">sign up</button></Link> </div>}

        {page === "signin" && <div className="flex"><Link to="/signup"><button className="h-12 72 text-lg shadow text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold capitalize flex justify-center items-center leading-8 px-3">sign up</button></Link></div>}

        {page === "signup" && <div className="flex"><Link to="/signin"><button className="h-12 72 text-lg shadow text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold capitalize flex justify-center items-center leading-8 px-3">sign in</button></Link></div>}

      </div>
    </nav >
  )
}

export default Navbar