import Navbar from "./Navbar"
import peopleImg from "../assets/images/aboutUs/aboutUs_people.png"
import smallIcon from "../assets/images/aboutUs/aboutUs_SmallLocationIcon.png"
import { specialBenefits, cityGuides, profAdvisors, whatsNew } from "../lib/aboutUsData"

const About = () => {
    return (
        <>
            <Navbar />
            <div>
                {/* banner */}
                <div className="w-full h-[500px] bg-banner-aboutUs  bg-no-repeat bg-top bg-cover">
                </div>

                {/* world map */}
                <section className="w-full h-[400px] bg-map-aboutUs  bg-no-repeat bg-center bg-cover flex">
                    <div className="flex flex-col text-blue-dark500 pt-8 px-16">
                        <p className="mt-4 w-[66%]">We are a diverse community of travelers exploring the world and expanding our horizons.</p>
                        <p className="my-1 w-[66%]">Our goal is to collaborate with each other by sharing experiences, knowledge, advice and special moments.</p>
                        <p className="my-1 w-[66%]">We strive to contribute to the local communities we share a home with, while respecting the culture, nature and life around us.</p>
                        <p className="my-1 w-[66%]">Throughout our journey, we hope to inspire and to be inspired by the individuals and communities we encounter, encouraging all of us to become who we want to be.</p>
                        <button className="h-[36px] mt-6 text-start  bg-blue-light500 w-fit text-white py-2 px-4 rounded-full text-sm">see what's happening</button>
                    </div>
                    <div className="">
                        <img src={peopleImg} alt="people" />
                    </div>
                </section>

                {/* special benefits */}
                <section className="flex flex-col h-[500px] bg-blue-light200">
                    <h2 className="mx-auto mt-12 mb-4 text-2xl text-blue-dark500">Latest Special Benefits</h2>
                    <div className="flex w-full justify-between px-8">
                        {specialBenefits.map(specialBenefit => (
                            <section key={specialBenefit.id} className="w-[32%] h-[40%] mb-8">
                                <img src={specialBenefit.imgSrc} alt="benefit 1" className="w-full" />
                                <h5 className="leading-5 my-2 text-blue-light300">{specialBenefit.city}</h5>
                                <p className="text-black-300 my-1 text-md">{specialBenefit.heading}</p>
                                <p>{specialBenefit.discount}</p>
                            </section>
                        ))}
                    </div>

                    <button className="bg-blue-light500 px-4 py-2 w-fit mx-auto text-white rounded-full">more benefits</button>
                </section>

                {/* city guides */}
                <section className="flex flex-col h-[500px]">
                    <h5 className="mx-auto mt-12 mb-4 text-2xl text-blue-dark500">City Guides</h5>
                    <div className="flex w-full justify-between px-8">
                        {cityGuides.map(cityGuide => (
                            <section key={Math.random() * 100000} className="w-[32%] h-[300px] bg-blue-light200 rounded-t-lg flex flex-col items-center">
                                <img src={cityGuide.imgSrc} alt="city guide" className="w-full h-[78%] object-cover" />
                                <h4 className="text-blue-dark500 my-auto">{cityGuide.city}</h4>
                            </section>
                        ))}
                    </div>
                    <button className="px-4 py-2 rounded-full mx-auto bg-blue-light500 text-white my-8">view all</button>
                </section>

                {/* Professional advisors */}
                <section className="flex flex-col h-[480px] bg-blue-light200">
                    <h5 className="mx-auto mt-12 mb-4 text-2xl text-blue-dark500">Consult with Professional Advisors</h5>
                    <div className="flex">
                        {profAdvisors.map(advisor => (
                            <section key={Math.random() * 100000} className="h-[320px] bg-white">
                                <img src={advisor.imgSrc} alt="advisor" />
                                <h4>{advisor.name}</h4>
                                <p><img src={smallIcon} alt="icon" />{advisor.role}</p>
                                <span>{advisor.location}</span>
                            </section>
                        ))}
                    </div>
                    <button>browse Advisors</button>
                </section>

                {/* whats new */}
                <section>
                    <h5>Whats New?</h5>
                    <div className="flex">
                        {whatsNew.map(item => (
                            <section key={Math.random() * 100000}>
                                <img src={item.imgSrc} alt="whats new" />
                                <p>{item.header}</p>
                                <span>{item.date}</span>
                                <span>{item.by}</span>
                                <p>{item.content}</p>
                            </section>
                        ))}
                    </div>
                    <button>read more</button>
                </section>
            </div>
        </ >
    )
}

export default About