import { faces } from "../lib/facesData"

const Home = () => {
  return (
    <section className="font-lato">
      {/* banner */}
      <div className="bg-banner w-full h-160 bg-no-repeat bg-cover bg-center bg-fixed">
        {/* banner text */}
        <div className="justify-center items-center flex flex-col text-heading1 font-bold text-white">
          <h1 className="leading-64 capitalize mt-16">safe & informed</h1>
          <h2 className="leading-64 uppercase">volunteering</h2>
          <h3 className="text-3xl mx-auto font-normal leading-14 mt-4">Join a global community of volunteers living and traveling around the world</h3>
          {/* faces */}
          <div className="flex flex-row mt-4">
            {faces.map(face => (
              <img src={face.src} key={face.id} alt="volunteer" className="h-54 w-54 ml-neg-8" />
            ))}
          </div>
          {/* input field */}
          <div className="w-874">
            <input className="w-357 h-60 border-r-2 border-black-lighter rounded-l-full mt-6 bg-ash-light2 p-2">
            </input>
            <input className="w-518 h-60 rounded-r-full mt-6 bg-ash-light2 p-2"></input>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Home