import styles from "../Home/home.module.css"
import fun from "../../assets/images/fun.svg"
import cost from "../../assets/images/cost.svg"
import internet from "../../assets/images/internet.svg"
import safety from "../../assets/images/safety.svg"
import overall from "../../assets/images/Star.svg"
import { useState } from "react"

const City = ({ city }) => {

    const [hideId, setHideId] = useState(null)
    return (
        <div className={styles.singleCityWrapper}>
            <img src={city.img} className={styles.cityImg} alt={city.name} />
            <div className={styles.cityNameWrapper}>
                <h3 className={styles.cityName}>{city.name}</h3>
            </div>

        </div>
    )
}

export default City