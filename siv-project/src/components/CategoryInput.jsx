import { categoriesData } from "../lib/categoriesData"

const CategoryInput = () => {
    return (
        <>
            <div className="my-8 flex items-center font-semibold">
                <span>Home</span>
                <button className="material-icons mx-1">arrow_right</button>
                <span>All Categories</span>
            </div>

            {/* The input bar */}
            <div className=" flex justify-between items-center relative">

                <input type="text" placeholder="All categories" className="w-[30%] shadow h-12 border-2 border-black-lighter rounded-l-full pr-12 pl-14"
                />
                <span className="material-icons absolute left-[20px] cursor-pointer">apps</span>
                <button className="material-icons absolute left-[284px]">menu</button>

                <input type="text" placeholder="Job Title or Keywords" className="w-[30%] shadow h-12 border-y-2 border-black-lighter px-6" />

                <button className="material-icons absolute right-[400px]">location_on</button>
                <button className="material-icons absolute right-[112px]">my_location</button>
                <input type="text" placeholder="Choose location" className="w-2/5 shadow h-12 border-2 border-black-lighter rounded-r-full pl-8 pr-[140px]" />
                <button className="capitalize absolute top-[6px] right-[6px] w-[100px] h-9 p-2 bg-blue-dark text-white rounded-full text-sm self-center">search</button>
            </div>

            <div className="mt-4 mb-8 flex flex-wrap px-2">
                {categoriesData.map(category => (
                    <button className="mr-4 leading-8">{category.name}</button>
                ))}
            </div>
        </>
    )
}

export default CategoryInput