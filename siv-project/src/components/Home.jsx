import { faces } from "../lib/facesData"
import Navbar from "./Navbar"
import eu from "../assets/images/eu.svg"
import fajub from "../assets/images/fajub.svg"
import team4 from "../assets/images/team4.svg"
import asia from "../assets/images/asia.svg"
import europe from "../assets/images/europe.svg"
import northAmerica from "../assets/images/north-america.svg"
import latinAmerica from "../assets/images/latin-america.svg"
import oceania from "../assets/images/oceania.svg"
import africa from "../assets/images/africa.svg"
import middleEast from "../assets/images/middle-east.svg"
import CityList from "./CityList"

const Home = () => {
  return (
    <>
      <Navbar page="home" />
      <section className="font-lato">
        {/* banner */}
        <div className="bg-banner w-full h-160 bg-no-repeat bg-cover bg-center bg-fixed">
          {/* banner text */}
          <div className="justify-center items-center flex flex-col text-heading1 font-bold text-white">
            <h1 className="leading-64 capitalize mt-12">safe & informed</h1>
            <h2 className="leading-64 uppercase">volunteering</h2>
            <h3 className="text-3xl mx-auto font-normal leading-14 mt-4">Join a global community of volunteers living and traveling around the world</h3>
            {/* faces */}
            <div className="flex flex-row mt-4">
              {faces.map(face => (
                <img src={face.src} key={face.id} alt="volunteer" className="h-54 w-54 ml-neg-8" />
              ))}
            </div>
            {/* input field */}
            <div className="w-874 font-normal">
              <input className="w-357 h-60 border-r-2 border-black-lighter rounded-l-full bg-ash-light2 py-4 pl-8 placeholder-black-500  text-lg" placeholder="Job Title or Keyword" />
              <input className="w-518 h-60 rounded-r-full mt-6 bg-ash-light2 p-2 py-4 pl-8 placeholder-black-500  text-lg" placeholder="Job Title or Keyword"></input>
            </div>

            {/* logos */}
            <div className="mt-24 mb-4 flex justify-between items-center w-3/4">
              <img src={eu} alt="icon" />
              <img src={fajub} alt="icon" />
              <img src={team4} alt="icon" />
            </div>
          </div>

          <div className="m-auto w-5/6">
            <div className="flex justify-between items-center font-bold mb-8">
              <div>
                <button className="h-10 w-17 p-2 text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark capitalize mr-6">filter</button>
                <input className="h-10 w-288 shadow bg-blue-background rounded-full p-4" />
              </div>
              <div>
                <button className="h-10 w-32 text-blue-dark shadow-btn-shadow rounded-full mr-6">Grid view</button>
                <button className="h-10 w-32 text-blue-dark shadow-btn-shadow rounded-full">Sort by</button>
              </div>
            </div>

            <div className="flex justify-between items-center font-bold">
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={asia} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={europe} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={latinAmerica} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={northAmerica} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={oceania} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={africa} alt="icon" className="w-3/5" /></button>
              <button className="border-dashed border-2 border-borders-dash outline-none rounded-full flex justify-center items-center p-2 h-8"><img src={middleEast} alt="icon" className="w-3/5" /></button>
            </div>

            <CityList />

          </div>





        </div>
      </section >
    </>
  )
}

export default Home
