import styles from "../Auth.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Modal = ({ updatePage }) => {

    const [showModal, setShowModal] = useState(true)

    const hideModal = () => {
        setShowModal(false)
    }

    const navigate = useNavigate()

    return (
        <>
            {showModal && <div className={styles.AuthModal} onClick={hideModal}>

                {/* <div className={styles.AuthModalOverlay}></div> */}

                <div className={styles.AuthModalContent}>
                    <h3 className={styles.AuthModalHeaderTxt}>CONGRATULATIONS</h3>
                    <p className={styles.AuthModalInfoTxt}>Your password has been changed successfully</p>

                    <div className={styles.AuthModalBtnWrapper}>
                        <button className={styles.AuthModalBtn} type="submit" onClick={() => { updatePage(6, true); setShowModal(false); navigate("/") }}>ok</button>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default Modal