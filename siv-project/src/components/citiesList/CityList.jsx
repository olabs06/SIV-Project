// import HomeInfoBar from "../HomeInfoBar"

import styles from "../Home/home.module.css"
import City from "./City"
import { useNavigate } from "react-router-dom"

const CityList = ({ cities }) => {

    const navigate = useNavigate()

    const handleCity = () => {
        navigate("/city")
    }

    return (
        <section className={styles.cityListContainer}>

            {<div className={styles.mainBarWrapper}>
                {cities.map(city => (
                    <div className={styles.cityCoverDiv} key={city.id} onClick={handleCity}><City city={city} hideSummary={false} /></div>
                ))}
            </div >}

            {/* <div className={styles.homeInfoBarContainer}>
                <HomeInfoBar />
            </div> */}

        </section >
    )
}

// onMouseEnter={() => showElem(city.id)} onMouseLeave={() => hideElem(city.id)}

export default CityList