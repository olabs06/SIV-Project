import styles from "./home.module.css"
// The logo placeholder
import logoPlaceHolder from "../../assets/images/cityList/logo_placeholder.png"
import BottomNav from "./BottomNav"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const OrganizationList = ({ fullPage }) => {

  const [country, setCountry] = useState(1)

  // useEffect(() => {
  //   fect
  // })

  return (
    <>
      {/* header area */}
      <div className={styles.notificationsHeaderWrapper}>
        <p className={styles.hiThere}>Hi there</p>
        <div className={styles.sivHeaderWrapper}>
          <h4>Safe and informed Volunteering</h4>
          {/* bell icon */}
          <span className={`material-icons ${styles.bellIcon}`}>notifications</span>
        </div>
        <div className={styles.notificationsInputWrapper}>
          <input type="text" name="notificationsInput" className={styles.notificationsInput} placeholder="Search or Filter" />
        </div>
        <div className={styles.regionsWrapper}>
          <div className={styles.innerRegionsWrapper}>
            <button className={styles.regionBtn} onClick={() => { setCountry(1); }} style={{
              backgroundColor: country === 1 ? "#0052AC" : "transparent", color: country === 1 ? "#FFF" : "rgba(14, 14, 15, 0.4)"
            }}>europe</button>

            <button className={styles.regionBtn} onClick={() => { setCountry(2); }} style={{
              backgroundColor: country === 2 ? "#0052AC" : "transparent", color: country === 2 ? "#FFF" : "rgba(14, 14, 15, 0.4)"
            }}>portugal</button>

            <button className={styles.regionBtn} onClick={() => { setCountry(3); }} style={{
              backgroundColor: country === 3 ? "#0052AC" : "transparent", color: country === 3 ? "#FFF" : "rgba(14, 14, 15, 0.4)"
            }}>romania</button>

            <button className={styles.regionBtn} onClick={() => { setCountry(4); }} style={{
              backgroundColor: country === 4 ? "#0052AC" : "transparent", color: country === 4 ? "#FFF" : "rgba(14, 14, 15, 0.4)"
            }}>spain</button>
          </div>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cardCenterDiv}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "11", "22", "33", "44", "55", "66", "77", "88", "99", "12", "34", "56", "78", "90", "123", "456", "789", "1234", "5678", "12345", "67890", "123456", "5354646"
          ].map(item => {
            return <Link to="/organisation-details" className={styles.organisationDetailsWrapper}>
              <div className={styles.logoCard} key={Math.random() * 1000000}>
                <div className={styles.logoImgWrapper} style={{
                  backgroundImage: `url(${logoPlaceHolder})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}>
                </div>
                <p className={styles.logoName}>Formative footprint</p>
                <p className={styles.logoLocation}>Europe, europe</p>

              </div> </Link>
          }
          )}
          <BottomNav />
        </div>
      </div>
    </>
  )
}

export default OrganizationList