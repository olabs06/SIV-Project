import React from 'react'
import styles from "./Auth.module.css"
import verifyEmailImg from "../../assets/images/auth/verifyEmail.jpg"
import { Link } from 'react-router-dom'

const VerifyEmail = ({ updatePage }) => {
    return (
        <section className={styles.VerifyEmailContainer}>

            <div className={styles.NavbarPlaceHolder}>
                Navbar
            </div>

            {/* verifyEmail image*/}
            <div className={styles.VerifyEmailImgWrapper}>
                <img src={verifyEmailImg} alt="verify email icon" />
            </div>


            {/* verifyEmail text */}
            <h3 className={styles.VerifyEmailHeaderTxt}>Verify Email</h3>
            {/* placeholder email */}
            <p className={styles.VerifyEmailParagraph}>Enter the 4-digit code sent to osifuyeebunoluwa@gmail.com</p>

            {/* code input */}
            <div className={styles.VerifyEmailInputContainer}>
                <input type="number" className={styles.VerifyEmailInput} />
                <input type="number" className={styles.VerifyEmailInput} />
                <input type="number" className={styles.VerifyEmailInput} />
                <input type="number" className={styles.VerifyEmailInput} />
            </div>

            <h3 className={styles.VerifyEmailResendCode}>Resend Code</h3>

            <button type='submit' className={styles.VerifyEmailVerifyBtn} onClick={() => updatePage(4, true)}>Verify</button>

            {/* resend code */}
        </section>
    )
}

export default VerifyEmail