import { useNavigate } from "react-router-dom"
import styles from "./about.module.css"

const About = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>

            <div className={styles.headWrapper}>
                <span className={`material-icons ${styles.backIcon}`} onClick={handleBack}>arrow_back_ios</span>
                <h3 className={styles.containerH3}>About</h3>
            </div>

            {/* video player */}

            <video className={styles.video} width="100%" height="100%" controls>
                <source src="" type="video/mp4" />
                Video unavailable at the moment. Please try again
            </video>


            <p className={styles.paragraph1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula elit, sodales at varius sed, malesuada in quam. In dignissim tortor sit amet ligula condimentum, non pharetra diam vestibulum. Aliquam vitae egestas diam. Morbi cursus id felis non congue. Nullam at nibh ullamcorper, fermentum justo imperdiet, sodales odio. </p>

            <p className={styles.paragraph2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula elit, sodales at varius sed, malesuada in quam. In dignissim tortor sit amet ligula condimentum, non pharetra diam vestibulum. Aliquam vitae egestas diam. Morbi cursus id felis non congue. Nullam at nibh ullamcorper, fermentum justo imperdiet, sodales odio. </p>
        </div>
    )
}

export default About