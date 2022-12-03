import { citiesData } from "../lib/citiesData"

import HomeInfoBar from "./HomeInfoBar"

import overall from "../assets/images/cityList/star.png"
import cost from "../assets/images/cityList/cost.png"
import internet from "../assets/images/cityList/internet.png"
import fun from "../assets/images/cityList/fun.png"
import safety from "../assets/images/cityList/safety.png"

import { useState } from "react"

const CityList = () => {

    const [hover, setHover] = useState(true)

    return (
        <section className="w-full py-8 flex relative">

            {/* main bar */}
            <div className="w-[98%] flex flex-wrap">
                {citiesData.map(city => (

                    // #TODO: MOVE TO A NEW COMPONENT AND RENDER THE COMPONENT INSTEAD
                    <div className="w-1/4 rounded-full cursor-pointer relative mx-2 my-3 font-bold" key={city.id}>

                        <img src={city.img} alt="icon" className="w-full opacity-90" />

                        <div onMouseEnter={() => setHover(prevState => true)} onMouseLeave={() => setHover(prevState => false)} className={`${hover ? "flex" : "hidden"} z-10 text-white absolute left-[10%] top-[25%] tracking-wider text-lg  flex-col font-normal w-[80%] self-center mx-auto`}>

                            {/* overall */}
                            <div className=" flex items-center">
                                <div className="w-[45%] flex items-center justify-between mr-2">
                                    <img src={overall} alt="overall icon" className="w-[18px] h-[18px] object-contain" />
                                    <p className="w-[70%] capitalize font-bold text-[16px]">overall</p>
                                </div>

                                <div className="w-[50%] h-[18px] bg-black-light rounded-full relative">
                                    <div style={{
                                        width: `${city.stats["overall"]}%`,
                                    }} className={`l-[3%] absolute h-[18px] ${city.stats.overall >= 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                                </div>
                            </div>
                            {/* cost */}
                            <div className=" flex items-center">
                                <div className="w-[45%] flex items-center justify-between mr-2">
                                    <img src={cost} alt="cost icon" className="w-[18px] h-[18px] object-contain" />
                                    <p className="w-[70%] capitalize text-[16px] font-bold">cost</p>
                                </div>

                                <div className="w-[50%] h-[18px] bg-black-light rounded-full relative">
                                    <div style={{
                                        width: `${city.stats["cost"]}%`,
                                    }} className={`l-[3%] absolute h-[18px] ${city.stats.cost > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                                </div>
                            </div>
                            {/* internet */}
                            <div className=" flex items-center">
                                <div className="w-[45%] flex items-center justify-between mr-2">
                                    <img src={internet} alt="internet icon" className="w-[18px] h-[18px] object-contain" />
                                    <p className="w-[70%] capitalize font-bold text-[16px]">internet</p>
                                </div>

                                <div className="w-[50%] h-[18px] bg-black-light rounded-full relative">
                                    <div style={{
                                        width: `${city.stats["internet"]}%`,
                                    }} className={`l-[3%] absolute h-[18px] rounded-l-full ${city.stats.internet > 95 ? "rounded-full" : "rounded-l-full"}  bg-blue-light`}></div>
                                </div>
                            </div>
                            {/* fun */}
                            <div className=" flex items-center">
                                <div className="w-[45%] flex items-center justify-between mr-2">
                                    <img src={fun} alt="fun icon" className="w-[18px] h-[18px] object-contain" />
                                    <p className="w-[70%] capitalize font-bold text-[16px]">fun</p>
                                </div>

                                <div className="w-[50%] h-[18px] bg-black-light rounded-full relative">
                                    <div style={{
                                        width: `${city.stats["fun"]}%`,
                                    }} className={`l-[3%] absolute h-[18px] ${city.stats.fun > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                                </div>
                            </div>
                            {/* safety */}
                            <div className=" flex items-center">
                                <div className="w-[45%] flex items-center justify-between mr-2">
                                    <img src={safety} alt="safety icon" className="w-[18px] h-[18px] object-contain" />
                                    <p className="w-[70%] capitalize font-bold text-[16px]">safety</p>
                                </div>

                                <div className="w-[50%] h-[18px] bg-black-light rounded-full relative">
                                    <div style={{
                                        width: `${city.stats["internet"]}%`,
                                    }} className={`l-[3%] absolute h-[18px] ${city.stats.safety > 95 ? "rounded-full" : "rounded-l-full"} bg-blue-light`}></div>
                                </div>
                            </div>
                        </div>

                        <div className="z-20 text-white absolute top-[40%] tracking-wider left-0 text-lg flex justify-center items-center font-normal w-full">
                            <p className="font-bold text-3xl text-center flex-wrap w-[50%]">{city.name}</p>
                        </div>

                    </div>))
                }

            </div >

            <div className="absolute right-[0px] py-4">
                <HomeInfoBar />
            </div>

        </section >
    )
}

export default CityList