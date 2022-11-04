import Navbar from "./Navbar"
import CategoryInput from "./CategoryInput"
import CategoryLeftBar from "./CategoryLeftBar"
import CategoryMainBar from "./CategoryMainBar"

const Opportunities = () => {
    return (
        <>
            <Navbar page="home" />
            <div className="w-5/6 mx-auto px-2">
                <CategoryInput />
                <div className="flex border-t-2 px-4">
                    <div className="w-[36%]" >
                        <CategoryLeftBar />
                    </div>
                    <div className="w-full">
                        <CategoryMainBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Opportunities