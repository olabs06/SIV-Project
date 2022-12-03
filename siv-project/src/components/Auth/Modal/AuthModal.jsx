import "../Auth.module.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const SignInModal = () => {

    const [showModal, setShowModal] = useState(true)
    const navigate = useNavigate()

    return (
        <>
            <div className="SignIn__Modal" onClick={() => { setShowModal(false) }}>

                <div className="SignIn__ModalContent">
                    <h3 className="SignIn__ModalHeaderTxt">Sign in as</h3>
                    <div className="SignIn__RadiosWrapper">
                        <label className="SignIn__Label">Volunteer <input type="radio" name="radio"></input> </label>
                        <label className="SignIn__Label">Organization <input type="radio" name="radio"></input></label>
                    </div>

                    <div className="SignIn__ModalBtnWrapper">
                        <Link to="/login">
                            <button className="SignIn__ModalBtn" type="submit" onClick={(evt) => {
                                evt.preventDefault()
                                setShowModal(false)
                                navigate("/")
                            }}>continue</button>
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export const SignUpModal = () => {

    const [showModal, setShowModal] = useState(true)
    const navigate = useNavigate()

    return (
        <>
            <div className="SignUp__Modal" onClick={() => { setShowModal(false) }}>

                <div className="SignUp__ModalContent">
                    <h3 className="SignUp__ModalHeaderTxt">Sign up as</h3>
                    <div className="SignUp__RadiosWrapper">
                        <label className="SignUp__Label">Volunteer <input type="radio" name="radio"></input> </label>
                        <label className="SignUp__Label">Organization <input type="radio" name="radio"></input></label>
                    </div>

                    <div className="SignUp__ModalBtnWrapper">
                        <button className="SignUp__ModalBtn" type="submit" onClick={(evt) => {
                            evt.preventDefault()
                            setShowModal(false)
                            navigate("/")
                        }}>continue</button>
                    </div>
                </div>

            </div>
        </>
    )
}