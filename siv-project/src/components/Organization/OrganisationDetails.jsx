import styles from "./orgdetails.module.css"
import orgImage from "../../assets/images/organisations/organisationImage.png"
import orgLogo from "../../assets/images/organisations/organisationLogo.png"
import photo1 from "../../assets/images/organisations/photo1.png"
import photo2 from "../../assets/images/organisations/photo2.png"
import { useState } from "react"
import Chat from "../Home/Chat"
import { useNavigate } from "react-router-dom"

const OrganisationDetails = () => {

    const [tab, setTab] = useState({
        about: false,
        chat: false,
        photos: true
    })

    const handleTab = (tab_) => {
        let oldTab = { ...tab };
        if (tab_ === "about") {
            oldTab.about = true;
            oldTab.chat = false;
            oldTab.photos = false;
        } else if (tab_ === "chat") {
            oldTab.about = false;
            oldTab.chat = true;
            oldTab.photos = false;
        } else {
            oldTab.about = false;
            oldTab.chat = false;
            oldTab.photos = true;
        }
        setTab(oldTab)
    }

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <section className={styles.container}>


            <div className={styles.aboutWrapper}>

                <div className={styles.headImgWrapper}>
                    <img src={orgImage} alt="organisation logo" className={styles.headImg} />
                    <div className={styles.backIconWrapper}>
                        <i className={`material-icons ${styles.backIcon}`} onClick={handleBack} >arrow_back_ios</i>
                    </div>
                </div>

                <div className={styles.bodyWrapper}>

                    <div className={styles.logoRow}>

                        <div className={styles.logoRowImgWrapper}>
                            <img src={orgLogo} alt="organisation logo" /> </div>

                        <div className={styles.logoRowContent}>
                            <h4 className={styles.ffText}>Formative footprint</h4>
                            <p className={styles.ffParagraph}>Europe, europe</p>
                        </div>

                    </div>

                    <div className={styles.aboutChatPhotos}>
                        <button className={tab.about ? styles.active : styles.orgBtn} onClick={() => handleTab("about")}>about</button>
                        <button className={tab.chat ? styles.active : styles.orgBtn} onClick={() => handleTab("chat")}>chat</button>
                        <button className={tab.photos ? styles.active : styles.orgBtn} onClick={() => handleTab("photos")}>photos</button>
                    </div>

                    {tab.about && <div className={styles.aboutWrapper}>
                        <div className={styles.mapWrapper}>
                        </div>

                        <div className={styles.infoWrapper}>
                            {/* icon */}
                            <div className={styles.infoIconWrapper}>
                                <i className="fa-solid fa-location-dot" style={{ color: "#1F4490" }}></i>
                            </div>

                            <div className={styles.contentParagraph}>
                                <p>624,Washington Avenue musa crescent, off Samuel manuwa street! victoria Island,Lagos,Nigeria 23401</p>
                                <p>OID Number; E10000000</p>
                                <p>Approx. number of local active member: 1-10</p>
                            </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-solid fa-envelope" style={{ color: "#1F4490" }}></i>
                            </div>
                            <div className={styles.contentParagraph}>
                                <p>Osifuyeebunoluwa@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-solid fa-phone" style={{ color: "#1F4490" }}></i></div>
                            <div className={styles.contentParagraph}>
                                <p>0808676363534, 83645738445</p>  </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-solid fa-globe" style={{ color: "#1F4490" }}></i>
                            </div>
                            <div className={styles.contentParagraph}>
                                <p>www.siv.com</p>
                            </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-brands fa-linkedin" style={{ color: "#1F4490" }}></i>
                            </div>
                            <div className={styles.contentParagraph}>
                                <p>www.linkedin/jshggdh.com</p>
                            </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-brands fa-facebook" style={{ color: "#1F4490" }}></i>
                            </div>
                            <div className={styles.contentParagraph}>
                                <p>www.facebook/bhhs.com</p>
                            </div>
                        </div>

                        <div className={styles.infoWrapper}>
                            <div className={styles.infoIconWrapper}>
                                {/* icon */}
                                <i className="fa-brands fa-twitter" style={{ color: "#1F4490" }}></i>
                            </div>
                            <div className={styles.contentParagraph}>
                                <p>www.twitter.com</p>
                            </div>
                        </div>

                        <div className={styles.shortDescWrapper}>
                            <h4>Short description</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas sed tempus.</p>
                        </div>


                    </div>}

                    {tab.chat && <section className={styles.orgChatWrapper}>
                        <p className={styles.orgComments}><span>All comments</span><i className="material-icons">keyboard_arrow_down</i></p>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                            return <div className={item === 2 || item === 3 ? styles.orgCommentChat : styles.orgSingleChat}>
                                <Chat />
                            </div>
                        })}
                    </section>}

                    {tab.photos && <section className={styles.photosWrapper}>
                        <div><img src={photo1} alt="" className={styles.orgPhoto} /></div>
                        <div><img src={photo2} alt="" className={styles.orgPhoto} /></div>
                        <div><img src={photo1} alt="" className={styles.orgPhoto} /></div>
                        <div><img src={photo2} alt="" className={styles.orgPhoto} /></div>
                        <div><img src={photo1} alt="" className={styles.orgPhoto} /></div>
                        <div><img src={photo2} alt="" className={styles.orgPhoto} /></div>
                    </section>}

                </div>

            </div>



        </section >
    )
}

export default OrganisationDetails