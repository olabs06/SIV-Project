import Login from "./Login"
// import ForgotPassword from "./ForgotPassword"
import NewPassword from "./NewPassword"
import Modal from "./Modal/Modal"
import VerifyEmail from "./VerifyEmail"
import SignInModal from "./Modal/AuthModal"

import { useState } from "react"

const LoginManager = () => {

    const [page, setPage] = useState(1)
    const [forgotPassword, setForgotPassword] = useState(false)

    let ComponentToRender = <div>hello</div>

    const updatePage = (currPage, fpBool) => {
        setPage(currPage)
        setForgotPassword(fpBool)
    }

    if (forgotPassword === false && page === 1) {
        ComponentToRender = <SignInModal updatePage={updatePage} />
    } else if (forgotPassword && page === 2) {
        ComponentToRender = <Login updatePage={updatePage} />
    } else if (forgotPassword && page === 3) {
        ComponentToRender = <VerifyEmail updatePage={updatePage} />
    } else if (forgotPassword && page === 4) {
        ComponentToRender = <NewPassword updatePage={updatePage} />
    } else if (forgotPassword && page === 5) {
        ComponentToRender = <Modal updatePage={updatePage} />
    } else {
        ComponentToRender = <div>Exceeded</div>
    }

    console.log("page", page)

    return (
        <>{ComponentToRender}</>

    )
}

export default LoginManager