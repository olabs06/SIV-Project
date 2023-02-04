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
        <div>
            <img src={city.img} className={styles.cityImg} alt={city.name} />
            {hideId !== city.id ? <div onMouseEnter={() => {setHideId(city.id); console.log(city.id)}} className={styles.cityNameWrapper}><h3 className={styles.cityName}>{city.name}</h3>
            </div> : <div onMouseLeave={() => (setHideId(null))} className={styles.hideSummary}>
                {/* overall */}
                <div className={styles.hideSummaryWrapper}>
                    <div>
                        <img src={overall} alt="overall icon" />
                        <p>overall</p>
                    </div>
                    <div>
                        <div className={` ${city.stats.overall >= 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`} style={{
                            width: `${city.stats["overall"]}%`,
                        }}></div>
                    </div>
                </div>
                {/* cost */}
                <div className={styles.hideSummaryWrapper}>
                    <div>
                        <img src={cost} alt="cost icon" />
                        <p>cost</p>
                    </div>

                    <div>
                        <div style={{
                            width: `${city.stats["cost"]}%`,
                        }} className={`l-[3%] absolute h-[18px] ${city.stats.cost > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                    </div>
                </div>
                {/* internet */}
                <div className={styles.hideSummaryWrapper}>
                    <div>
                        <img src={internet} alt="internet icon" />
                        <p>internet</p>
                    </div>
                    <div>
                        <div style={{
                            width: `${city.stats["internet"]}%`,
                        }} className={`l-[3%] absolute h-[18px] rounded-l-full ${city.stats.internet > 95 ? "rounded-full" : "rounded-l-full"}  bg-blue-light`}></div>
                    </div>
                </div>
                {/* fun */}
                <div className={styles.hideSummaryWrapper}>
                    <div>
                        <img src={fun} alt="fun icon" />
                        <p>fun</p>
                    </div>
                    <div>
                        <div style={{
                            width: `${city.stats["fun"]}%`,
                        }} className={`l-[3%] absolute h-[18px] ${city.stats.fun > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                    </div>
                </div>
                {/* safety */}
                <div className={styles.hideSummaryWrapper}>
                    <div>
                        <img src={safety} alt="safety icon" />
                        <p>safety</p>
                    </div>
                    <div>
                        <div style={{
                            width: `${city.stats["internet"]}%`,
                        }} className={`l-[3%] absolute h-[18px] ${city.stats.safety > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default City