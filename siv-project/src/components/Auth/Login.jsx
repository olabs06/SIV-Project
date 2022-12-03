import facebookIcon from "../../assets/images/auth/facebook-icon.svg"
import appleIcon from "../../assets/images/auth/apple-icon.svg"
import googleIcon from "../../assets/images/auth/google-icon.svg"
import logo from "../../assets/images/logo-SIV-transparent-background 1.svg"
import { useState } from "react"

// import Navbar from "./Navbar"
import { useFormik } from "formik"
import * as Yup from "yup"
// import { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./Auth.module.css"

const Login = ({ updatePage }) => {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string("Invalid password string").required("Password is required")
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

      <h3 className={styles.AuthWelcomeTxt}>Welcome back</h3>
      <h4 className={styles.AuthWelcomeTxt}>Login</h4>

      {/* social icons */}
      <div className={styles.AuthSocialIconsWrapper}>
        <button className={`${styles.FbLogoRounded} shadow-fb-shadow`}><img src={facebookIcon} alt="fb icon" /></button>
        <button className={`${styles.AppleLogoRounded} shadow-apple-shadow`}><img src={appleIcon} alt="apple icon" /></button>
        <button className={`${styles.GoogleLogoRounded} shadow-google-shadow`}><img src={googleIcon} alt="google icon" /></button>
      </div>

      {/* or */}
      <div className={styles.AuthOrContainer}>
        < div className={styles.AuthOrLeft}></div>
        <span className="text-black-light leading-8">OR</span>
        < div className={styles.AuthOrRight}></div>
      </div >

      {/* email and password login */}
      <form>
        {/* email address */}
        < div className={styles.AuthInputWrapper}>
          <label className={styles.AuthLabel} htmlFor="email">Email address or Username
          </label>
          <input className={`${styles.AuthInput} placeholder-black-500`} id="email" name="email" type="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <p className="text-red-500 font-normal mt-1">{formik.errors.email}</p> : null}
        </div >

        {/* password */}
        <div>
          <label className={styles.AuthLabel} htmlFor="password">
            Password
          </label >
          <input className={`${styles.AuthInput} placeholder-black-500`} id="password" name="password" type="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <p className="text-red-500 font-normal mt-1">{formik.errors.password}</p> : null}
        </div>

      </form >

      <div className={styles.AuthForgotPasswordWrapper}>
        <span className={styles.AuthForgotPassWord} onClick={() => updatePage(2, true)}>Forgot password?</span>
      </div>


      <div className={styles.AuthLoginBtnWrapper}>
        < button className={styles.AuthLoginBtn} type="submit">log in</button>
      </div >

      <h3 className={styles.AuthDontHaveAnAcct} >Don't have an account?  <Link to=" / signup"><button className={styles.AuthSignUpOption} > Sign up</button ></Link ></h3 >

    </div >
  )
}

export default Login

// {/* <Navbar page="signin" /> */}

//       {/* <div className="w-64 mx-auto my-8 flex flex-col justify-center items-center font-lato text-black-light opacity-75  place-self-start font-bold"> */}

//       {/* <h3 className="text-xl text-black-light leading-20 mx-auto">Sign in</h3> */}

      // {/* Facebook */}
      // {/* <div className="my-3">
      //     <button type="submit" className="facebookBtn shadow-fb-shadow">
      //       <img src={facebookIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
      //       <span>continue with facebook</span>
      //     </button>
      //   </div> */}

      // {/* Apple */}
      // {/* <div className="my-3">
      //     <button type="submit" className="appleBtn shadow-apple-shadow">
      //       <img src={appleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
      //       <span>continue with apple</span>
      //     </button>
      //   </div> */}

      // {/* Google */}
      // {/* <div className="my-3">
      //     <button type="submit" className="googleBtn shadow-google-shadow">
      //       <img src={googleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
      //       <span className="opacity-90">continue with google</span>
      //     </button>
      //   </div> */}

      // {/* or */}
      // {/* <div className="flex flex-row my-3  items-center justify-center w-82">
      //     <div className="h-0.5 w-full mx-2 bg-black-light opacity-25"></div>
      //     <span className="text- text-black-light leading-8">OR</span>
      //     <div className="h-0.5 w-full mx-2 bg-black-light opacity-25"></div>
      //   </div> */}

//       {/* inputs */}
//       {/* <h3 className="text-lg text-black-light opacity-90 leading-8 self-center" >Sign in with your email address</h3> */}

//       {/* <div className="w-82">
//           <form className="bg-white py-4 w-full" onSubmit={formik.handleSubmit}>

//             <div className="mb-3 px-2">
//               <label className="block text-black-light leading-8 capitalize text-sm" htmlFor="email">
//                 Your email address
//               </label>

//               <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="email" name="email" type="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
//               {formik.touched.email && formik.errors.email ? <p className="text-red-500 font-normal mt-1">{formik.errors.email}</p> : null}
//             </div>

//             <div className="mb-3 px-2">
//               <label className="block text-black-light leading-8 capitalize text-sm" htmlFor="password">
//                 Password
//               </label>
//               <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="password" name="password" type="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
//               {formik.touched.password && formik.errors.password ? <p className="text-red-500 font-normal mt-1">{formik.errors.password}</p> : null}
//             </div>

//             <div className="flex flex-col">
//               <h4 className="leading-5 text-lg  text-black-light opacity-90 cursor-pointer self-center my-2">Forgot your password?</h4>

//               <div className="px-2 py-4 border-b-2 flex justify-center items-center">
//                 <button className="w-full capitalize px-4 rounded-full h-10 bg-gradient-to-r from-blue-light to-blue-dark text-white leading-10 self-center" type="submit">sign in</button>
//               </div> </div>

//             <div className="h-12 flex flex-col justify-center items-center">

//               <h3 className="leading-14 text-black-light mt-10" >Don't have an account?  <Link to="/signup"><button className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-dark">Sign up</button></Link></h3>

//               {/* <button className="w-full capitalize px-4 rounded-full h-10 bg-ash-light text-blue-dark leading-10 self-center shadow" type="submit">signup</button> */}

      // {/* </div>
      //     </form> */}
      // {/* </div >  */}

      // {/* </div > */}
