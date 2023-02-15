import styles from "./welcome.module.css"
import sivLogo from "../../assets/images/auth/sivLogo.png"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const Welcome = () => {

    const [showSignUp, setShowSignUp] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showProceed, setShowProceed] = useState(false)

    const organizationRef2 = useRef(null)
    const volunteerRef2 = useRef(null)
    const organizationRef1 = useRef(null)
    const volunteerRef1 = useRef(null)

    // show sign up modal
    const handleSignUpModal = (evt) => {
        evt.preventDefault();
        setShowSignUp(true)
    }

    // show login modal
    const handleLoginModal = (evt) => {
        evt.preventDefault()
        setShowLogin(true)
    }

    const handleLoginCheck = () => {
        if (volunteerRef1.current.checked === true || organizationRef1.current.checked === true) {
            setShowProceed(true)
        } else {
            setShowProceed(false)
        }
    }

    const handleSignUpCheck = () => {
        if (volunteerRef2.current.checked === true || organizationRef2.current.checked === true) {
            setShowProceed(true)
        } else {
            setShowProceed(false)
        }
    }

    return (
        <div className={styles.container}>

            {/* siv logo */}
            <div className={styles.logo}>
                <img src={sivLogo} alt="siv-logo" />
                <h4 className={styles.logoText}>Safe and informed volunteering</h4>
            </div>

            {/* login and sign up buttons */}
            <div className={styles.signinSignupBtn}>
                <button className={styles.login} onClick={(evt) => { handleLoginModal(evt) }}>Log in <i className="material-icons">arrow_forward</i></button>
                <button className={styles.signup} onClick={(evt) => { handleSignUpModal(evt) }}>Sign Up <i className="material-icons">arrow_forward</i></button>

            </div>

            {/* signup modal */}
            {showSignUp && <div className={styles.modalContainer}>
                <div className={styles.modalWrapper}>
                    <h4 className={styles.modalHeaderText}>sign up as</h4>
                    <div className={styles.modalBody}>
                        {/* volunteer */}
                        <div>
                            <span>volunteer</span>
                            <input type="radio" id="volunteerSignUp" name="volunteerSignUp" ref={volunteerRef1} onChange={handleLoginCheck} />
                        </div>
                        {/* organization */}
                        <div>
                            <span>organization</span>
                            <input type="radio" id="organizationLogin" name="organizationLogin" ref={organizationRef1} onChange={handleLoginCheck} />
                        </div>
                        {showProceed && <Link to="/signup" className={styles.proceedBtn}>Proceed</Link>}
                    </div>
                </div>
            </div>}

            {/* login modal */}
            {showLogin && <div className={styles.modalContainer}>
                <div className={styles.modalWrapper}>
                    <h4 className={styles.modalHeaderText}>sign in as</h4>
                    <div className={styles.modalBody}>
                        {/* volunteer */}
                        <div>
                            <span>volunteer</span>
                            <input type="radio" id="volunteer" name="organization" ref={volunteerRef2} onChange={handleSignUpCheck} />
                        </div>
                        {/* organization */}
                        <div>
                            <span>organization</span>
                            <input type="radio" id="organization" name="organization" ref={organizationRef2} onChange={handleSignUpCheck} />
                        </div>
                        {showProceed && <Link to="/signin" className={styles.proceedBtn}>Proceed</Link>}
                    </div>
                </div>
            </div>}


        </div>
    )
}

export default Welcome