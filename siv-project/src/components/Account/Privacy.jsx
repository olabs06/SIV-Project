import { useNavigate } from "react-router-dom"
import styles from "./privacy.module.css"

const Privacy = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.headWrapper}>
                <span className={`material-icons ${styles.backIcon}`} onClick={handleBack}>arrow_back_ios</span>
                <h3 className={styles.headStatement}>Privacy policy</h3>
            </div>

            <h3 className={styles.subHeaderText}>Privacy Statement </h3>
            <p className={styles.paragraphText}>This privacy Statement explains our practices, including your choices, regarding the collection use, and disclosure of certain information, in connection with our service</p>

            <h3 className={styles.subHeaderText}>Contacting Us</h3>
            <p className={styles.paragraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula elit, sodales at varius sed, malesuada in quam. In dignissim tortor sit amet ligula condimentum, non pharetra diam vestibulum. Aliquam vitae egestas diam. Morbi cursus id felis non congue. Nullam at nibh ullamcorper, fermentum justo imperdiet, sodales odio.</p>

            <h3 className={styles.subHeaderText}>Collecting of information</h3>
            <p className={styles.paragraphText}>Vestibulum ullamcorper erat vel tincidunt gravida. In molestie, augue quis tincidunt rutrum, turpis odio scelerisque libero, vel consectetur libero eros quis eros. Praesent ut mi non est bibendum gravida vitae eget risus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

            <h3 className={styles.subHeaderText}>Disclosure of Information</h3>
            <p className={styles.paragraphText}>Vivamus tincidunt malesuada felis, ut congue elit faucibus at. Nulla purus dui, tincidunt et velit id, pretium fringilla purus. Nam dignissim libero quam, vel scelerisque sapien hendrerit iaculis. Aliquam ac metus interdum, sollicitudin tellus ac, mattis urna. Nunc id molestie odio, vel sollicitudin ex. Aliquam et neque tincidunt, finibus ligula in, mattis sapien. Sed nec aliquam nulla, at consequat ipsum.</p>

            <h3 className={styles.subHeaderText}>Access to Account and Profiles</h3>
            <p className={styles.paragraphText}>Vivamus tincidunt malesuada felis, ut congue elit faucibus at. Nulla purus dui, tincidunt et velit id, pretium fringilla purus. Nam dignissim libero quam, vel scelerisque sapien hendrerit iaculis. Aliquam ac metus interdum, sollicitudin tellus ac, mattis urna. Nunc id molestie odio, vel sollicitudin ex. Aliquam et neque tincidunt, finibus ligula in, mattis sapien. Sed nec aliquam nulla, at consequat ipsum.</p>
        </div>
    )
}

export default Privacy