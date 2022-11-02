import Navbar from "./Navbar"
import CategoryInput from "./CategoryInput"

const Opportunities = () => {
    return (
        <>
            <Navbar page="home" />
            <div className="w-5/6 mx-auto px-2">
                <CategoryInput />
            </div>
        </>
    )
}

export default Opportunities

{/* <span class="material-icons-outlined">
                menu
            </span>
            <span class="material-icons-outlined">
                apps
            </span>
            <span class="material-icons">
                location_on
            </span>
            <span class="material-icons">
                my_location
            </span>
            <span class="material-icons">
                arrow_right
            </span>
            <span class="material-icons">
                add
            </span> */}