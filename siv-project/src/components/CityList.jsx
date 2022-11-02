import { citiesData } from "../lib/citiesData"
import wifiIcon from "../assets/images/wifi.svg"
import thermometerIcon from "../assets/images/thermometer.svg"
import humanIcon from "../assets/images/human.svg"
import HomeInfoBar from "./HomeInfoBar"

const CityList = () => {
    return (
        <section className="w-full px-2 py-8 flex">

            {/* main bar */}
            <div className="w-[90%] flex flex-wrap">
                {citiesData.map(city => (

                    // #TODO: MOVE TO A NEW COMPONENT AND RENDER THE COMPONENT INSTEAD
                    <div className="w-1/5 rounded-full cursor-pointer relative mx-2 my-3 font-bold" key={city.id}>

                        <img src={city.img} key={city.id} alt="icon" className="w-full opacity-90" />

                        <div className="absolute  h-4 top-[12%] left-0 w-full flex justify-center items-center">
                            <div className="text-white flex justify-center items-center ">
                                <img src={wifiIcon} alt="" className="mr-1 h-[18px] w-[18px]" />
                                <div className="flex flex-col ">
                                    <span className="uppercase text-[6px] mb-[-6px] mt-1">mbps</span>
                                    <span className="text-[12px]">{city.internetSpeed}</span>
                                </div>
                            </div>
                        </div>


                        <div className="text-white absolute top-[25%] tracking-wider left-0 text-lg flex justify-center items-center font-normal w-full">
                            <span>{city.name}</span>
                        </div>

                        <div className="text-white absolute top-[50%] h-[24px] left-0  flex justify-center items-center font-normal  w-full">
                            {/* left */}
                            <div className="w-[50%] flex justify-center items-center pl-4 pr-2">
                                <img src={thermometerIcon} alt="" className="mr-1" />
                                <div className="flex flex-col">
                                    <p className="text-[6px] flex-1">{city.feel}</p>
                                    <p className="text-[14px] mt-[-4px]">{city.currentTemperature}</p>
                                </div>
                            </div>
                            {/* right */}
                            <div className="w-[50%] flex justify-center items-center pr-4 pl-2">
                                <img src={humanIcon} alt="" className="mr-1" />
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-[6px]">{city.aql}</span>
                                    <span className="text-[14px] mt-[-4px] ">{city.humidity}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-white absolute top-[70%] h-[24px] left-0  flex justify-center items-center font-normal  w-full">
                            <p className="text-[12] font-bold">${city.monthlyCost} / mo</p>
                        </div>

                    </div>))}

            </div>

            <div className="absolute right-[116px] py-6">
                <HomeInfoBar />
            </div>

        </section>
    )
}

export default CityList