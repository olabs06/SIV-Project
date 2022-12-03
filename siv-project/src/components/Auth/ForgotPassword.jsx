import React from 'react'
import styles from "./Auth.module.css"
import verifyEmailImg from "../../assets/images/auth/verifyEmail.jpg"
import { Link } from 'react-router-dom'

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
            <p className={styles.ForgotPassWordParagraph}>Enter the 4-digit code sent to osifuyeebunoluwa@gmail.com</p>

            {/* code input */}
            <div className={styles.ForgotPassWordInputContainer}>
                <input type="number" min="0" max="9" className={styles.ForgotPassWordInput} />
                <input type="number" min="0" max="9" className={styles.ForgotPassWordInput} />
                <input type="number" min="0" max="9" className={styles.ForgotPassWordInput} />
                <input type="number" min="0" max="9" className={styles.ForgotPassWordInput} />
            </div>

            <div className={styles.ForgotPassWordResendCodeWrapper}>
                <button className={styles.ForgotPassWordResendCode}>Resend Code</button>
            </div >

            <button type='submit' className={styles.ForgotPassWordVerifyBtn} onClick={() => updatePage(3, true)}>Verify</button>

            {/* resend code */}
        </section >
    )
}

export default ForgotPassword