// import { Link } from "react-router-dom"
import { useState } from "react"

import styles from "./home.module.css"

// The banner background image
import sampleCityDetail from "../../assets/images/cityList/sampleCityDetail.png"

// Placeholders for the image grid
import placeholder1 from "../../assets/images/cityList/cityDetails_placeholder.png"
import placeholder2 from "../../assets/images/cityList/cityDetails_placeholder (2).png"
import placeholder3 from "../../assets/images/cityList/cityDetails_placeholder (3).png"
import placeholder4 from "../../assets/images/cityList/cityDetails_placeholder (4).png"

import OrganizationList from "./OrganizationList"
import Chat from "./Chat"
import { useNavigate } from "react-router-dom"

const CityDetails = () => {

    const [cIndex, setCIndex] = useState(1)
    const navigate = useNavigate()

    const [tab, setTab] = useState({
        showAbout: { show: true },
        showOrgs: { show: false },
        showChat: { show: false },
        cIndex: 1
    })

    const handleClick = (page) => {
        if (page === "about") {
            let oldTab = { ...tab }
            oldTab["showAbout"].show = true
            oldTab["showChat"].show = false
            oldTab["showOrgs"].show = false
            oldTab.cIndex = 1
            setTab(oldTab)
        } else if (page === "organizations") {
            let oldTab = { ...tab }
            oldTab["showOrgs"].show = true
            oldTab["showAbout"].show = false
            oldTab["showChat"].show = false
            oldTab.cIndex = 2
            setTab(oldTab)
        } else if (page === "chat") {
            let oldTab = { ...tab }
            oldTab["showChat"].show = true
            oldTab["showAbout"].show = false
            oldTab["showOrgs"].show = false
            oldTab.cIndex = 3
            setTab(oldTab)
        }
    }

    const handleBack = () => {
        navigate(-1)
    }


    return (
        <div className={styles.cityContainer}>

            {/* city background image */}
            <div style={{
                backgroundImage: `url(${sampleCityDetail})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '360px',
                position: 'relative',
                border: 'none'
            }}>
                <h3 className={styles.cityDetailsName}><span className={`material-icons ${styles.backIcon}`} onClick={handleBack} >arrow_back_ios</span>Agueda</h3>
                <h4 className={styles.cityCountry}>Portugal</h4>
                <div className={styles.cityNavWrapper}>
                    <div className={styles.cityNav}>
                        <button onClick={(evt) => { evt.preventDefault(); handleClick("about") }} style={tab.cIndex === 1 ? {
                            backgroundColor: "#1f4490", color: 'white'
                        } : {
                            color: 'rgba(14, 14, 15, 0.5)', background: "transparent"
                        }} className={styles.cityNavBtn}>about</button>
                        <button onClick={(evt) => { evt.preventDefault(); handleClick("organizations") }} style={tab.cIndex === 2 ? {
                            backgroundColor: "#1f4490", color: 'white'
                        } : {
                            color: 'rgba(14, 14, 15, 0.5)', background: "transparent"
                        }} className={styles.cityNavBtn}>organisations</button>
                        <button onClick={(evt) => { evt.preventDefault(); handleClick("chat") }} style={tab.cIndex === 3 ? {
                            backgroundColor: "#1f4490", color: 'white'
                        } : {
                            color: 'rgba(14, 14, 15, 0.5)', background: "transparent"
                        }} className={styles.cityNavBtn}>chat</button>
                    </div>
                </div>
            </div>

            {/* city information section */}
            {tab.showAbout.show && <section className={styles.infoWrapper}>

                <div className={styles.mapWrapper}>
                    {/* google map goes here */}
                </div>

                <div className={styles.reviewsWrapper}><span>2341 reviews</span></div>

                {/* more info */}
                {["General Rating", "Living Cost", "Weather Condition", "Internet", "Level  of Safety", "International Community", "Restaurants and Pubs", "Leisure opportunities", "Sport & Culture", " Transport & Connectivity"].map(item => {
                    return <div className={styles.moreInfo} key={Math.random() * 10000000}>
                        <p className={styles.ratingText}>{item}</p>
                        <div className={styles.ratingBar}></div>
                    </div>
                })}

                {/* description */}
                <div>
                    <h3 className={styles.descriptionText}>description</h3>
                    <p className={styles.descriptionParagraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quam sit veniam repellendus, necessitatibus, eveniet quas quod sed hic cumque vero unde tempora incidunt dolores? Veniam atque ad vitae neque cum sed mollitia eum accusamus facere consequuntur deserunt est, totam quae sapiente dolore minus perferendis, non excepturi alias nam eaque.</p>
                </div>

                {/* image grid */}
                <div className={styles.gridWrapper}>
                    <img src={placeholder1} alt="city view" />
                    <img src={placeholder2} alt="city view" />
                    <img src={placeholder3} alt="city view" />
                    <img src={placeholder4} alt="city view" />
                </div>

            </section>}

            {/* organizations information section */}
            {tab.showOrgs.show && <section className={styles.organizationsWrapper}>

                {/* sort by button */}
                <p className={styles.sortByParagraph}><span>sort by</span><i className="material-icons">sort</i></p>


                <OrganizationList />


            </section>}

            {/* chat information section */}
            {tab.showChat.show && <><section className={styles.chatWrapper}>
                <p className={styles.comments}><span>All comments</span><i className="material-icons">keyboard_arrow_down</i></p>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                    return <div className={item === 2 || item === 3 ? styles.commentChat : styles.singleChat}>
                        <Chat />
                    </div>
                })}



            </section><div className={styles.publicComment}>
                    <form>
                        <input type="text" name="public_comment" placeholder="write a public comment" />
                        <i className="material-icons">send</i>
                    </form>
                </div> </>}


        </div >
    )
}

export default CityDetails