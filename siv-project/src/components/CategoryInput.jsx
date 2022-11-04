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
            <div className=" flex justify-between items-center relative text-black-light">

                <input type="text" placeholder="All categories" className="w-[30%] shadow h-12 border-2 border-black-lighter rounded-l-full pr-12 pl-14"
                />
                <button className="material-icons absolute left-[20px] cursor-pointer text-black-light opacity-50">apps
                </button>
                <button className="material-icons absolute left-[284px] text-black-light opacity-50">menu</button>

                <input type="text" placeholder="Job Title or Keywords" className="w-[30%] shadow h-12 border-y-2 border-black-lighter px-6" />

                <button className="material-icons absolute right-[392px] text-black-light opacity-50">location_on</button>
                <button className="material-icons absolute right-[92px] text-black-light opacity-50">my_location</button>

                <input type="text" placeholder="Choose location" className="w-2/5 shadow h-12 border-2 border-black-lighter rounded-r-full pl-9 pr-[124px]" />

                <button className="capitalize absolute top-[6px] right-[6px] w-[75px] h-9 p-2 bg-blue-dark text-white rounded-full text-sm self-center">search</button>

            </div>

            <div className="mt-4 mb-4 flex flex-wrap px-2 text-black-light">
                {categoriesData.map(category => (
                    <button className="mr-4 leading-8">{category.name}</button>
                ))}
            </div>
        </>
    )
}

export default CategoryInput