import { citiesData } from "../lib/citiesData"
// import City from "../components/City"
import wifiIcon from "../assets/images/wifi.svg"
// import thermometerIcon from "../assets/images/thermometer.svg"
// import humanIcon from "../assets/images/human.svg"

const CityList = () => {
    return (
        <section className="w-full px-2 py-8">

            {/* main bar */}
            <div className="w-4/5 flex flex-wrap">
                {citiesData.map(city => (
                    // #TODO: MOVE TO A NEW COMPONENT AND RENDER THE COMPONENT INSTEAD
                    <div className="w-1/5 h-1/5 rounded-full relative mx-2 my-3 font-bold" key={city.id}>
                        <img src={city.img} key={city.id} alt="icon" className="w-full opacity-90" />
                        <div className="text-white absolute top-[10%] left-[30%] flex justify-center items-center ">
                            <img src={wifiIcon} alt="" className="mr-2" />
                            <div className="flex flex-col ">
                                <span className="uppercase text-[8px] mb-[-6px] mt-1">mbps</span>
                                <span className="text-[12px]">{city.internetSpeed}</span>
                            </div>
                        </div>
                        <div className="text-white absolute top-[30%] tracking-wider left-[33%] text-xl font-normal mx-auto">{city.name}</div>
                        {/* <div className="absolute flex justify-content items-center">
                            <img src={thermometerIcon} alt="" />
                            <img src={humanIcon} alt="" />
                        </div> */}

                    </div>

                ))}
            </div>

            {/* right bar */}
        </section>
    )
}

export default CityList