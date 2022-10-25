import logo from "../assets/images/logo-SIV-transparent-background 1.svg"

const Navbar = () => {
  return (
    // navbar
    <nav className="bg-white w-full px-16 py-4 mb-4 border-b-2 border-black-lighter font-lato">

      {/* wrapper */}
      <div className="flex flex-row container m-auto justify-between items-center px-8">

        {/* logo */}
        <img src={logo} alt="logo" className="cursor-pointer w-12 h-12" />

        {/* options */}
        <ul className="items-center cursor-pointer flex justify-center text-blue-dark font-bold capitalize">
          <li className="p-2 mr-8 leading-8 text-xl">opportunities</li>
          <li className="p-2 mr-8 leading-8 text-xl">volunteers</li>
          <li className="p-2 mr-8 leading-8 text-xl">organizations</li>
          <li className="p-2 mr-8 leading-8 text-xl">about</li>
        </ul>

        {/* signup button */}
        <button className="h-12 w-12 text-xl shadow text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold capitalize flex justify-center items-center leading-8">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar