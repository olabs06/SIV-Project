import { jobMatches } from "../lib/jobMatchData"

import logo from "../assets/images/category/undp.png"
import profileImg from "../assets/images/landing/face1.svg"
import saveIcon from "../assets/images/category/clip.svg"

const CategoryMainBar = () => {
    return (
        <section className="px-2 w-full py-2">

            {jobMatches.map(jobMatch => (
                <section className="pt-8 pb-6 pr-8 pl-4 h-[320px] w-full b mb-8 rounded-2xl border-2 flex" key={Math.random()*10000}>
                    <div className="w-[20%]">
                        <img src={logo} alt="logo" className="w-[75%] object-cover" />
                    </div>
                    <div className="w-full flex flex-col relative">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center">
                                <h4 className="text-[20px] text-blue-dark font-semibold">{jobMatch.job}</h4>
                                <p className="text-[18px] text-black-white">{jobMatch.organization}</p>
                                <p className="text-[16px] text-black-333 opacity-[84%]">{jobMatch.location} {jobMatch.remote ? `(Remote)` : ""}</p>
                            </div>
                            <img src={saveIcon} alt="save icon" className="w-[36px] h-9 cursor-pointer" />
                        </div>

                        <div className="flex items-center my-3">
                            <img src={profileImg} className="w-[56px] h-14 rounded-full object-cover mr-4 cursor-pointer" alt="profile " />
                            <span className=" text-black-333 opacity-[75%]">Your Profile matches this role</span>
                        </div>
                        <p className="absolute bottom-0 text-blue-dark font-semibold text-[14px]">Posted {jobMatch.timePosted}</p>
                    </div>
                </section>
            ))
            }


        </section >
    )
}

export default CategoryMainBar