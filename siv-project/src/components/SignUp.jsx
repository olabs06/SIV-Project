import facebookIcon from "../assets/images/facebook-icon.svg"
import appleIcon from "../assets/images/apple-icon.svg"
import googleIcon from "../assets/images/google-icon.svg"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
// import forwardArrowIcon from "../assets/images/forward-icon.svg"

const SignUp = () => {

    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string("Invalid password string").required("Password is required"),
            // confirmPassword: Yup.string().required("confirm your password").equals()
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <Navbar page="signup" />
            <div className="w-64 mx-auto my-8 flex flex-col justify-center items-center font-lato text-black-light opacity-75  place-self-start font-bold">

                <h3 className="text-xl text-black-light leading-20 mx-auto">Signup</h3>

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
                <h3 className="text-lg text-black-light opacity-75 leading-8 self-center" >Sign up with your email address</h3>

                <div className="w-82">
                    <form className="bg-white py-4 w-full">

                        <div className="mb-3 px-2">
                            <label className="block text-black-light opacity-90 leading-8 capitalize text-sm" htmlFor="email">
                                Your email address
                            </label>
                            <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light opacity-90 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="email" name="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div className="mb-3 px-2">
                            <label className="block text-black-light opacity-90 leading-8 capitalize text-sm" htmlFor="password">
                                Create Password
                            </label>
                            <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light opacity-90 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="password" name="password" type="password" placeholder="Enter your password" />
                        </div>

                        <div className="mb-3 px-2">
                            <label className="block text-black-light opacity-90 leading-8 capitalize text-sm" htmlFor="confirmPassword">
                                Password Confirmation
                            </label>
                            <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-light opacity-90 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-500" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" />
                        </div>

                        <div>
                            <h4 className="leading-5 text-sm  text-black-light opacity-75 mt-4">By clicking on signup, you agree to the Terms and Conditions of use</h4>

                            <div className="px-2 py-4 border-b-2 flex justify-center items-center">
                                <button className="w-full capitalize px-4 rounded-full h-10 bg-gradient-to-r from-blue-light to-blue-dark text-white leading-10 self-center">sign up</button>
                            </div>

                            <div className="h-12 flex justify-center items-center">
                                <h3 className="leading-14 text-black-light">Have an account?  <Link to="/signin"><button className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-dark">Sign in</button></Link></h3>

                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default SignUp