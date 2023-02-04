import { faces } from "../../lib/facesData"
// import Navbar from "../Navbar"
import { useContext } from "react"

import eu from "../../assets/images/landing/eu.png"
import fajub from "../../assets/images/landing/fajub.png"
import team4 from "../../assets/images/landing/team4.png"
import formative from "../../assets/images/landing/formative.png"
import deses from "../../assets/images/landing/deses.png"

import europe from "../../assets/images/landing/europe.png"
import portugal from "../../assets/images/landing/portugal.png"
import romania from "../../assets/images/landing/romania.png"
import spain from "../../assets/images/landing/spain.png"

import styles from "./home.module.css"

import CityList from "../citiesList/CityList"

import currentLoc from "../../assets/images/landing/current-location.svg"
import yourLoc from "../../assets/images/landing/your-location.svg"
import { useState, useEffect } from "react"
import Login from "../Auth/Login"
import { CitiesContext } from "../../context/citiesContext"
// import { Link } from "react-router-dom"

const Home = () => {

  const { filterCities } = useContext(CitiesContext)

  const [user, setUser] = useState({
    loggedIn: true
  })

  const [cities, setCities] = useState([])

  const cityHandler = (country) => {
    let citiesData = filterCities(country)
    setCities(citiesData)
  }

  useEffect(() => {
    let citiesData = filterCities()
    setCities(citiesData)
  }, [])

  const [country, setCountry] = useState(1)
  const [navItem, setNavItem] = useState(1)


  return (

    <>
      {
        user.loggedIn ? <>
          {/* <Navbar page="home" /> */}

          <section className={styles.container}>

            {/* banner */}
            <div className={styles.bannerContainer}>

              {/* banner text */}
              <div className={styles.bannerTextContainer}>
                <h1>safe & informed</h1>
                <h2>volunteering</h2>
                <h3>Join a global community of volunteers living and traveling around the world</h3>

                {/* faces */}
                <div className={styles.facesContainer}>
                  {faces.map(face => (
                    <img src={face.src} key={face.id} alt="volunteer" />
                  ))}
                </div>

                {/* input field */}
                <div className={styles.inputFieldWrapper}>
                  <input className="w-357 h-60 border-r-2 border-black-lighter rounded-l-full bg-ash-light2 py-4 px-8 placeholder-black-500  text-lg self-center  text-black-light" placeholder="Job Title or Keyword" />
                  <img src={yourLoc} alt="" className="absolute left-[360px] top-[54px] w-[22px] h-[22px] mx-3 cursor-pointer" />
                  <input className="w-518 h-60 rounded-r-full mt-6 bg-ash-light2 p-2 py-4 pl-12 pr-[150px] placeholder-black-500  text-lg self-center text-black-light" placeholder="Choose location"></input>
                  <img src={currentLoc} alt="" className="absolute right-[104px] top-[54px] w-[22px] h-[22px] mx-3 cursor-pointer" />
                  <button className="capitalize absolute top-[41px] right-[6px] w-[100px] h-12 p-2 bg-blue-dark rounded-full text-sm self-center">search</button>
                </div>
              </div>


              {/* logos */}
              <div className={styles.logoContainer}>
                <h2>our partners</h2>
                <div className={styles.logoWrapper}>
                  <img src={eu} alt="icon" />
                  <img src={formative} alt="icon" />
                  <img src={deses} alt="icon" />
                  <img src={fajub} alt="icon" />
                  <img src={team4} alt="icon" />
                </div>
              </div>

              <div className={styles.mainBodyContainer}>

                <div className={styles.filterContainer}>
                  <div className="flex justify-center items-center">
                    <button className={styles.filterBtn}>filter</button>
                    <div className="relative">
                      <input className={`${styles.placeHolderInput} shadow placeholder-blue-dark`} placeholder="search or filter" />
                      <button className={styles.addBtn}>
                        <span className="material-icons text-white">add</span>
                      </button>
                    </div>
                  </div>

                  {/* <div>
                  <button className="h-10 w-32 text-blue-dark shadow-btn-shadow rounded-full mr-6">Grid view</button>
                  <button className="h-10 w-32 text-blue-dark shadow-btn-shadow rounded-full">Sort by</button>
                </div> */}
                </div>

                <div className={styles.countriesWrapper}>

                  <button onClick={() => { setCountry(1); cityHandler(null) }} style={{
                    backgroundColor: country === 1 ? "#0052AC" : "transparent"
                  }}><img src={europe} alt="icon" /></button>

                  <button onClick={() => { setCountry(2); cityHandler("Portugal") }} style={{
                    backgroundColor: country === 2 ? "#0052AC" : "transparent"
                  }}><img src={portugal} alt="icon" /></button>

                  <button onClick={() => { setCountry(3); cityHandler("Romania") }} style={{
                    backgroundColor: country === 3 ? "#0052AC" : "transparent"
                  }}><img src={romania} alt="icon" /></button>

                  <button onClick={() => { setCountry(4); cityHandler("Spain") }} style={{
                    backgroundColor: country === 4 ? "#0052AC" : "transparent"
                  }}><img src={spain} alt="icon" /></button>
                </div>

                <CityList cities={cities} />

              </div>

            </div>

            {/* Add bottom nav */}
            <div className={styles.bottomNavWrapper}>
              {/* home */}
              <div onClick={() => setNavItem(1)} style={{
                color: navItem === 1 ? "#0052AC" : "#4A4A4B"
              }}>
                <button style={{
                  color: navItem === 1 ? "#0052AC" : "#4A4A4B"
                }}>
                  <span className="material-icons">home</span>
                </button>
                <p>Home</p>
              </div>
              {/* organizations */}
              <div onClick={() => setNavItem(2)} style={{
                color: navItem === 2 ? "#0052AC" : "#4A4A4B"
              }}>
                <button style={{
                  color: navItem === 2 ? "#0052AC" : "#4A4A4B"
                }} >
                  <span className="material-icons">workspaces</span>
                </button>
                <p>organizations</p>
              </div>
              {/* groups */}
              {/* <div>
              <button>
                <span className="material-icons">groups</span>
              </button>
              <p>community</p>
            </div> */}
              {/* account */}

              <div onClick={() => setNavItem(3)} style={{
                color: navItem === 3 ? "#0052AC" : "#4A4A4B"
              }}>
                <button style={{
                  color: navItem === 3 ? "#0052AC" : "#4A4A4B"
                }}>
                  <span className="material-icons">person</span>
                </button>
                <h4>account</h4>
              </div>
            </div>


          </section > </> : <Login />
      }


    </>
  )
}

export default Home
