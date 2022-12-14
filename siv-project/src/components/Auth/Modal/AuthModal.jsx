import styles from "../Auth.module.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const SignInModal = ({ updatePage }) => {

    const [showModal, setShowModal] = useState(true)
    const navigate = useNavigate()

    return (
        <>
            {showModal && <div className={styles.AuthModal} onClick={() => setShowModal(false)}>

                {/* <div className={styles.AuthModalOverlay}></div> */}

                <div className={styles.AuthModalContent}>
                    <h3 className={styles.AuthModalHeaderTxt}>sign in as</h3>


                    <div className={styles.AuthModalBtnWrapper}>
                        <div className={styles.SignInRadiosWrapper}>
                            <label className={styles.SignInLabel}>Volunteer <input type="radio" name="volunteer" onClick={(evt) => { evt.preventDefault(); updatePage(2, true) }}></input> </label>
                            <label className={styles.SignInLabel}>Organization <input type="radio" name="organization" onClick={(evt) => { evt.preventDefault(); console.log("clicked") }}></input></label>
                        </div>
                    </div>

                </div>

            </div>}
        </>
    )
}

export default SignInModal