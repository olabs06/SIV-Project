import CategoryInput from "../components/CategoryInput"
import Navbar from "./Navbar"

const Volunteers = () => {
    return (
        <>
            <Navbar page="home" />
            <div className="w-5/6 mx-auto px-2">
                <CategoryInput />
            </div>
        </>
    )
}

export default Volunteers