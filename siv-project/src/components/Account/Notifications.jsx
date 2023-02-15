import BottomNav from "../Home/BottomNav"
import styles from "../../components/Account/notifications.module.css"
import logo from "../../assets/images/account/notificationLogo.png"
import { useNavigate } from "react-router-dom"

const Notifications = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>

            {/* top */}
            <section className={styles.notificationsHeaderWrapper}>
                <i className="material-icons" onClick={handleBack}>arrow_back_ios</i>
                <p className={styles.paragraph}>Notifications</p>
            </section>

            {/* middle */}
            <section className={styles.midDivWrapper}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    return <>
                        <div className={styles.notificationsCard}>
                            <div className={styles.logoWrapper}>
                                <img src={logo} alt="organization logo" />
                            </div>
                            <div className={styles.infoWrapper}>
                                <h4 className={styles.formativeText}>Formative footprints</h4>
                                <p className={styles.replyText}>You have a reply...</p>
                                <span className={styles.seeReplySpan}>See reply</span>
                                <span className={styles.timeSpan}>11:00am</span>
                                <span className={styles.numMsgsSpan}>2</span>
                            </div>

                        </div>
                        <hr className={styles.horizRule} /></>
                })}
            </section>

        </div>
    )
}

export default Notifications