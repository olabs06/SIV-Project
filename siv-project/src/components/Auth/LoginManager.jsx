import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import NewPassword from "./NewPassword"
import Modal from "./Modal/Modal"
import VerifyEmail from "./VerifyEmail"

import { useState } from "react"

const LoginManager = () => {

    const [page, setPage] = useState(1)
    const [forgotPassword, setForgotPassword] = useState(false)

    let ComponentToRender = <div>hello</div>

    // console.log(forgotPassword === false)
    // console.log(typeof (page))

    const updatePage = (currPage, fpBool) => {
        setPage(currPage)
        setForgotPassword(fpBool)
    }

    if (forgotPassword === false && page === 1) {
        ComponentToRender = <Login updatePage={updatePage} />
    } else if (forgotPassword && page === 2) {
        ComponentToRender = <ForgotPassword updatePage={updatePage} />
    } else if (forgotPassword && page === 3) {
        ComponentToRender = <VerifyEmail updatePage={updatePage} />
    } else if (forgotPassword && page === 4) {
        ComponentToRender = <NewPassword updatePage={updatePage} />
    } else if (forgotPassword && page === 5) {
        ComponentToRender = <Modal updatePage={updatePage} />
    } else {
        ComponentToRender = <div>Exceeded</div>
    }

    return (
        <>{ComponentToRender}</>

    )
}

export default LoginManager