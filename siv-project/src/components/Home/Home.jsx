import { faces } from "../../lib/facesData"
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
import BottomNav from "./BottomNav"


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
                <h1 className={styles.mainHeader}>safe & informed</h1>
                <h2 className={styles.volunteeringText}>volunteering</h2>
                <h3 className={styles.joinText}>Join a global community of volunteers living and traveling around the world</h3>

                {/* faces */}
                <div className={styles.facesContainer}>
                  {faces.map(face => (
                    <img src={face.src} key={face.id} alt="volunteer" />
                  ))}
                </div>

                {/* input field */}
                <div className={styles.inputFieldWrapper}>

                  <input className={styles.firstInput} placeholder="Job Title" />
                  <div className={styles.secondInputWrapper}>
                    <div className={styles.secondInputDiv}>
                      <img src={yourLoc} alt="" className={styles.locationLogo} />
                      <input className={styles.secondInput} placeholder="Choose location"></input>
                    </div>
                    <div className={styles.searchBtnDiv}>
                      <img src={currentLoc} alt="" className={styles.currentLocationIcon} />
                      <button className={styles.searchBtn}>search</button>
                    </div>
                  </div>

                </div>

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

                <button className={styles.filterBtn}>filter</button>
                <div className={styles.filterWrapper}>
                  <input className={styles.placeHolderInput} placeholder="search or filter" />
                  <button className={styles.addBtn}>
                    <span className="material-icons">add</span>
                  </button>
                </div>


              </div>

              <div className={styles.countriesWrapper}>

                <button className={styles.countryBtn} onClick={() => { setCountry(1); cityHandler(null) }} style={{
                  backgroundColor: country === 1 ? "#0052AC" : "transparent"
                }}><img src={europe} alt="icon" /></button>

                <button className={styles.countryBtn} onClick={() => { setCountry(2); cityHandler("Portugal") }} style={{
                  backgroundColor: country === 2 ? "#0052AC" : "transparent"
                }}><img src={portugal} alt="icon" /></button>

                <button className={styles.countryBtn} onClick={() => { setCountry(3); cityHandler("Romania") }} style={{
                  backgroundColor: country === 3 ? "#0052AC" : "transparent"
                }}><img src={romania} alt="icon" /></button>

                <button className={styles.countryBtn} onClick={() => { setCountry(4); cityHandler("Spain") }} style={{
                  backgroundColor: country === 4 ? "#0052AC" : "transparent"
                }}><img src={spain} alt="icon" /></button>
              </div>

              <CityList cities={cities} />

            </div>

            {/* Add bottom nav */}


                
            <BottomNav />
          </section > </> : <Login />
      }


    </>
  )
}

export default Home
