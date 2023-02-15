import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import verifyEmailImg from "../../assets/images/auth/verifyEmail.jpg"
import styles from "./signup.module.css"

const VerifyEmail = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/signin");
        }, 4000);
    }, []);


    return (
        <section className={styles.container}>

            {/* <div className={styles.NavbarPlaceHolder}>
                Navbar
            </div>  */}

            {/* verifyEmail image*/}
            <div className={styles.verifyImgWrapper}>
                <img src={verifyEmailImg} alt="verify email icon" />
            </div>


            {/* verifyEmail text */}
            <h3 className={styles.verifyHeader}>Verify Email</h3>

            {/* placeholder email */}
            <p className={styles.verifyParagraph}>A verification link has been sent to sent to <span>osifuyeebunoluwa@gmail.com</span></p>
            <p className={styles.verifyParagraph}>Please check your email and follow the instructions to complete sign up</p>

            {/* <p className={styles.verifyResendCode}>Resend Code</p> */}

        </section>
    )
}

export default VerifyEmail