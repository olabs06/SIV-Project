import facebookIcon from "../assets/images/facebook-icon.svg"
import appleIcon from "../assets/images/apple-icon.svg"
import googleIcon from "../assets/images/google-icon.svg"

const SignUp = () => {
    return (
        <div className="w-64 mx-auto mb-2 flex flex-col justify-center items-center font-lato text-black-light opacity-75  place-self-start font-bold">

            <h3 className="text-xl text-black-light leading-20 mx-auto">Signup</h3>

            {/* Facebook */}
            <div className="my-3">
                <button type="submit" className="w-82 h-12 bg-blue-dark rounded-full leading-14 shadow-md px-12 py-4 flex items-center justify-center text-white uppercase ">
                    <img src={facebookIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
                    <span>continue with facebook</span>
                </button>
            </div>

            {/* Apple */}
            <div className="my-3">
                <button type="submit" className="w-82 h-12 rounded-full  px-12 py-4 flex items-center justify-center bg-black-light text-white leading-14 uppercase shadow-md">
                    <img src={appleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
                    <span>continue with apple</span>
                </button>
            </div>

            {/* Google */}
            <div className="my-3">
                <button type="submit" className="w-82 h-12 bg-white rounded-full shadow-md px-12 py-4 flex items-center leading-14 justify-center text-black-light uppercase ">
                    <img src={googleIcon} alt="facebook Icon" className="h-6 w-6 mr-4" />
                    <span className="opacity-50">continue with google</span>
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

            <div class="w-82">
                <form className="bg-white py-4 w-full">

                    <div className="mb-3 px-2">
                        <label className="block text-black-light opacity-75 leading-8 capitalize text-sm" for="email">
                            Your email address
                        </label>
                        <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-white opacity-50 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-light" id="email" name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3 px-2">
                        <label className="block text-black-light opacity-75 leading-8 capitalize text-sm" for="email">
                            Email confirmation
                        </label>
                        <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-white opacity-50 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-light" id="email" name="email" type="email" placeholder="confirm your email" />
                    </div>

                    <div className="mb-3 px-2">
                        <label className="block text-black-light opacity-75 leading-8 capitalize text-sm" for="email">
                            Create Password
                        </label>
                        <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-white opacity-50 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-light" id="email" name="email" type="email" placeholder="Enter your password" />
                    </div>

                    <div className="mb-3 px-2">
                        <label className="block text-black-light opacity-75 leading-8 capitalize text-sm" for="email">
                            Password Confirmation
                        </label>
                        <input className="shadow appearance-none border h-10 w-full py-2 px-8 text-black-white opacity-50 leading-tight focus:outline-none rounded-full bg-blue-background placeholder-black-light" id="email" name="email" type="email" placeholder="Confirm your password" />
                    </div>

                    <div>
                        <h4 className="leading-5 text-sm  text-black-light opacity-75 mb-2">By clicking on signup, you agree to the Terms and Conditions of use</h4>

                        <div className="px-2 py-4 border-b-2 flex justify-center items-center">
                            <button className="w-full capitalize px-4 rounded-full h-10 bg-gradient-to-r from-blue-light to-blue-dark text-white leading-10 self-center">signup</button>
                        </div>
                        
                        <div className="h-12 flex justify-center items-center">
                            <h3 className="leading-14 text-black-light">Have an account?  <button className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-light to-blue-dark">Log in</button></h3>
                           
                        </div>
                    </div>

                </form>
            </div>


            <div></div>
            <div></div>

        </div>
    )
}

export default SignUp