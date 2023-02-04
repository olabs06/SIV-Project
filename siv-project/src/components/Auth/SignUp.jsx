import facebookIcon from "../../assets/images/auth/facebook-icon.svg"
import appleIcon from "../../assets/images/auth/apple-icon.svg"
import googleIcon from "../../assets/images/auth/google-icon.svg"
import logo from "../../assets/images/logo-SIV-transparent-background 1.svg"

// import Navbar from "./Navbar"
import { useFormik } from "formik"
import * as Yup from "yup"
// import { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./Auth.module.css"

const SignUp = () => {

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

    // console.log(formik.values)

    return (
        <div className={styles.AuthContainer}>

            <div className={styles.NavbarPlaceHolder}>
                Navbar
            </div>

            {/* image logo */}
            <div className={styles.AuthLogoWrapper}>
                <img src={logo} alt="logo" />
            </div>

            <h3 className={styles.AuthWelcomeTxt}>Welcome Onboard</h3>
            <h4 className={styles.AuthWelcomeTxt}>Sign up</h4>

            {/* social icons */}
            <div className={styles.AuthSocialIconsWrapper}>
                <button className={`${styles.FbLogoRounded} shadow-fb-shadow`}><img src={facebookIcon} alt="fb icon" /></button>
                <button className={`${styles.AppleLogoRounded} shadow-apple-shadow`}><img src={appleIcon} alt="apple icon" /></button>
                <button className={`${styles.GoogleLogoRounded} shadow-google-shadow`}><img src={googleIcon} alt="google icon" /></button>
            </div>

            {/* or */}
            <div className={styles.AuthOrContainer}>
                <div className={styles.AuthOrLeft}></div>
                <span className="text-black-light leading-8">OR</span>
                <div className={styles.AuthOrRight}></div>
            </div>

            {/* name, email, phone, and password signup */}
            <form>
                {/* name */}
                <div className={styles.AuthInputWrapper}>
                    <label className={styles.AuthLabel} htmlFor="name">Name</label>
                    <input className={`${styles.AuthInput} placeholder-black-500`} id="name" name="name" type="text" placeholder="Enter your name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <p className="text-red-500 font-normal mt-1">{formik.errors.name}</p> : null}
                </div>

                {/* email address */}
                <div className={styles.AuthInputWrapper}>
                    <label className={styles.AuthLabel} htmlFor="email">Your email address</label>
                    <input className={`${styles.AuthInput} placeholder-black-500`} id="email" name="email" type="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <p className="text-red-500 font-normal mt-1">{formik.errors.email}</p> : null}
                </div>

                {/* #TODO: phone number */}
                <div className={styles.AuthInputWrapper}>
                    <label className={styles.AuthLabel} htmlFor="phoneNumber">Phone number</label>
                    <input className={`${styles.AuthInput} placeholder-black-500`} id="phoneNumber" name="phoneNumber" type="phone" placeholder="Enter your phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                    {formik.touched.phone && formik.errors.phone ? <p className="text-red-500 font-normal mt-1">{formik.errors.phone}</p> : null}
                </div>

                {/* password */}
                < div className={styles.AuthInputWrapper}>
                    < label className={styles.AuthLabel} htmlFor="password">
                        Password
                    </label >
                    <input className={`${styles.AuthInput} placeholder-black-500`} id="password" name="password" type="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <p className="text-red-500 font-normal mt-1">{formik.errors.password}</p> : null}
                </div >

                <div className={styles.AuthLoginBtnWrapper}>
                    < button className={
                        styles.AuthLoginBtn} type="submit">sign up</button>
                </div>

            </form >

            <h3 className={styles.AuthDontHaveAnAcct}>Have an account?  <Link to=" / login"><button className={styles.AuthSignUpOption}> Log in</button ></Link ></h3 >

        </div >
    )
}

export default SignUp
