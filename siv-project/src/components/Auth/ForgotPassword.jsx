import React from 'react'
import styles from "./Auth.module.css"
import verifyEmailImg from "../../assets/images/auth/verifyEmail.jpg"

const ForgotPassword = ({ updatePage }) => {
    return (
        <section className={styles.ForgotPassWordContainer}>

            <div className="NavbarPlaceHolder">
                Navbar
            </div>

            {/* verifyEmail image*/}
            <div className={styles.ForgotPassWordImgWrapper}>
                <img src={verifyEmailImg} alt="verify email icon" />
            </div>


            {/* verifyEmail text */}
            <h3 className={styles.ForgotPassWordHeaderTxt}>Forgot Password</h3>
            {/* placeholder email */}
            <p className={styles.ForgotPassWordParagraph}>Enter an e-mail to send the verification code</p>

            {/* code input */}
            <div className={styles.ForgotPassWordInputContainer}>
                <input type="email" className={styles.ForgotPassWordEmailInput} />
            </div>

            <div className={styles.ForgotPassWordResendCodeWrapper}>
                <button className={styles.ForgotPassWordResendCode}>Resend Code</button>
            </div >

            <button type='submit' className={styles.ForgotPassWordVerifyBtn} onClick={() => updatePage(3, true)}>Send code</button>

            {/* resend code */}
        </section >
    )
}

export default ForgotPassword