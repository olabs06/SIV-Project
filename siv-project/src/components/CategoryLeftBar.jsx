const CategoryLeftBar = () => {
    return (
        <div className="px-4 text-black-light">

            {/* requirements group */}
            <div className="pt-8">
                <h3 className="mb-1">Requirements</h3>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Full time
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Holiday Placement
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        2 - 4 Hours Daily
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Few Hours Weekly
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        0 - 1 Hour Daily
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Choose Your Hours
                    </label>
                </div>
            </div>

            {/* work type */}
            <div className="mt-4 relative">
                <h3 className="mb-1">Work Type</h3>
                <input type="text" className="w-full bg-black-5 border-black-250 relative p-4 rounded-full h-[28px] shadow-shadow-113 placeholder:text-sm pr-8" placeholder="Select Work Type" />
                <button className="material-icons absolute right-1 top-[32px] text-black-light opacity-50">arrow_drop_down</button>
            </div>

            {/* experience group */}
            <div className="mt-4">
                <h3 className="mb-1">Experience</h3>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        No Experience
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Less than 1 Year
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        1  - 2 Years
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        3+ Years
                    </label>
                </div>
            </div>

            {/* education group */}
            <div className="mt-4">
                <h3 className="mb-1">Education</h3>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Any Level
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        High School/School Certificate
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Undergraduate (Still in school)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Bachelors Degree
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Masters Degree
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-light checked:border-2 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer rounded-full" type="checkbox" value="fullTime" id="fullTime" />
                    <label className="form-check-label inline-block text-black-500" htmlFor="flexCheckChecked">
                        Post Graduate
                    </label>
                </div>
            </div>

            {/* tip culture */}
            <div className="mt-4 relative">
                <h3 className="mb-1">Tip Culture</h3>
                <input type="text" className="w-full bg-black-5 border-black-250 relative p-4 rounded-full h-[28px] shadow-shadow-113 placeholder:text-sm pr-8" placeholder="Select Tip Culture" />
                <button className="material-icons absolute right-1 top-[32px] text-black-light opacity-50">arrow_drop_down</button>
            </div>

            {/* tip frequency */}
            <div className="mt-4 relative">
                <h3 className="mb-1">Tip Frequency</h3>
                <input type="text" className="w-full bg-black-5 border-black-250 relative p-4 rounded-full h-[28px] shadow-shadow-113 placeholder:text-sm pr-8" placeholder="Select Tip Frequency" />
                <button className="material-icons absolute right-1 top-[32px] text-black-light opacity-50">arrow_drop_down</button>
            </div>

            <button className="w-full bg-blue-dark shadow-shadow-113 px-4 py-2 text-white font-semibold self-center rounded-full mt-8">
                Advanced Search
            </button>

        </div>
    )
}

export default CategoryLeftBar