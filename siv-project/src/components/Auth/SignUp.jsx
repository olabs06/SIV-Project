import facebookIcon from "../../assets/images/auth/facebook-icon.svg"
import appleIcon from "../../assets/images/auth/apple-icon.svg"
import googleIcon from "../../assets/images/auth/google-icon.svg"
import logo from "../../assets/images/logo-SIV-transparent-background 1.svg"

import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, Navigate, useNavigate } from "react-router-dom"

import styles from "./signup.module.css"
import { useState } from "react"
import VerifyEmail from "./VerifyEmail"

export const SignUp = () => {

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string("Invalid password string").required("Password is required"),
            name: Yup.string("Invalid name string").required("Name is required"),
            //#TODO: fix this
            phone: Yup.string("Invalid phone string").required("Phone is required")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const navigate = useNavigate()

    const handleSignUp = () => {
        navigate("/verify-email")
    }

    return (
        <>

            {/* image logo */}
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <h3 className={styles.welcomeText}>Welcome Onboard</h3>
            <h4 className={styles.signUpText}>Sign up</h4>

            {/* social icons */}
            <div className={styles.socialWrapper}>
                <button className={`${styles.FbLogoRounded} shadow-fb-shadow`}><img src={facebookIcon} alt="fb icon" /></button>
                <button className={`${styles.AppleLogoRounded} shadow-apple-shadow`}><img src={appleIcon} alt="apple icon" /></button>
                <button className={`${styles.GoogleLogoRounded} shadow-google-shadow`}><img src={googleIcon} alt="google icon" /></button>
            </div>

            {/* or */}
            <div className={styles.orWrapper}>
                <div className={styles.orLeft}></div>
                <span className={styles.orText}>OR</span>
                <div className={styles.orRight}></div>
            </div>

            {/* name, email, phone, and password signup */}
            <form>
                {/* name */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input className={styles.authInput} id="name" name="name" type="text" placeholder="Enter your name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <p className={styles.error}>{formik.errors.name}</p> : null}
                </div>

                {/* email address */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label} htmlFor="email">Your email address</label>
                    <input className={styles.authInput} id="email" name="email" type="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <p className={styles.error}>{formik.errors.email}</p> : null}
                </div>

                {/* #TODO: phone number */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label} htmlFor="phoneNumber">Phone number</label>
                    <input className={styles.authInput} id="phoneNumber" name="phoneNumber" type="phone" placeholder="Enter your phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                    {formik.touched.phone && formik.errors.phone ? <p className={styles.error} >{formik.errors.phone}</p> : null}
                </div>


                {/* password */}
                < div className={styles.inputWrapper}>
                    < label className={styles.label} htmlFor="password">
                        Password
                    </label >
                    <input className={styles.authInput} id="password" name="password" type="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <p className={styles.error}>{formik.errors.password}</p> : null}
                </div >

                <div className={styles.authLoginBtnWrapper}>
                    < button className={
                        styles.authLoginBtn} type="submit" onClick={(evt) => {
                            evt.preventDefault(); handleSignUp()
                        }}>sign up<i className="material-icons">arrow_forward</i></button>
                </div>
            </form >

            <h3 className={styles.haveAnAcct}>Have an account?  <Link to="/signin"><button className={styles.loginOption}>Log in</button ></Link ></h3 >

        </>
    )
}

const SignUpController = () => {
    const [verify, showVerify] = useState(false)

    return (
        <div className={styles.container}>
            {verify ? <VerifyEmail /> : <SignUp />}
        </div>

    )
}

export default SignUpController
