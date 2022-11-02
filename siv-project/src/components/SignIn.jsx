import facebookIcon from "../assets/images/facebook-icon.svg"
import appleIcon from "../assets/images/apple-icon.svg"
import googleIcon from "../assets/images/google-icon.svg"
import Navbar from "./Navbar"
import { useFormik } from "formik"
import * as Yup from "yup"
// import { useState } from "react"
import { Link } from "react-router-dom"

const SignIn = () => {

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
    <>
      <Navbar page="signin" />

      <div className="w-64 mx-auto my-8 flex flex-col justify-center items-center font-lato text-black-light opacity-75  place-self-start font-bold">

        <h3 className="text-xl text-black-light leading-20 mx-auto">SignIn</h3>

        {/* Facebook */}
        <div className="my-3">
          <button type="submit" className="facebookBtn shadow-fb-shadow">
            <img src={facebookIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
            <span>continue with facebook</span>
          </button>
        </div>

        {/* Apple */}
        <div className="my-3">
          <button type="submit" className="appleBtn shadow-apple-shadow">
            <img src={appleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
            <span>continue with apple</span>
          </button>
        </div>

        {/* Google */}
        <div className="my-3">
          <button type="submit" className="googleBtn shadow-google-shadow">
            <img src={googleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
            <span className="opacity-90">continue with google</span>
          </button>
        </div>

        {/* or */}
        <div className="flex flex-row my-3  items-center justify-center w-82">
          <div className="h-0.5 w-full mx-2 bg-black-light opacity-25"></div>
          <span className="text- text-black-light leading-8">OR</span>
          <div className="h-0.5 w-full mx-2 bg-black-light opacity-25"></div>
        </div>

        {/* inputs */}
        <h3 className="text-lg text-black-light opacity-90 leading-8 self-center" >Sign in with your email address</h3>

        <div className="w-82">
          <form className="bg-white py-4 w-full" onSubmit={formik.handleSubmit}>

            <div className="mb-3 px-2">
              <label className="block text-black-light leading-8 capitalize text-sm" htmlFor="email">
                Your email address
              </label>

              <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="email" name="email" type="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email ? <p className="text-red-500 font-normal mt-1">{formik.errors.email}</p> : null}
            </div>

            <div className="mb-3 px-2">
              <label className="block text-black-light leading-8 capitalize text-sm" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="password" name="password" type="password" placeholder="Enter your password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password ? <p className="text-red-500 font-normal mt-1">{formik.errors.password}</p> : null}
            </div>

            <div className="flex flex-col">
              <h4 className="leading-5 text-lg  text-black-light opacity-90 cursor-pointer self-center my-2">Forgot your password?</h4>

              <div className="px-2 py-4 border-b-2 flex justify-center items-center">
                <button className="w-full capitalize px-4 rounded-full h-10 bg-gradient-to-r from-blue-light to-blue-dark text-white leading-10 self-center" type="submit">sign in</button>
              </div> </div>

            <div className="h-12 flex flex-col justify-center items-center">

              <h3 className="leading-14 text-black-light mt-10" >Don't have an account?  <Link to="/signup"><button className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-dark">Sign up</button></Link></h3>

              {/* <button className="w-full capitalize px-4 rounded-full h-10 bg-ash-light text-blue-dark leading-10 self-center shadow" type="submit">signup</button> */}

            </div>
          </form>
        </div >

      </div >
    </>
  )
}

export default SignIn