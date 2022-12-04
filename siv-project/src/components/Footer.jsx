const Footer = () => {
  return (
    <div className="bg-blue-light w-full h-16 flex justify-start text-white font-lato font-bold text-lg ">
        <div className="h-full w-full py-4 px-16">&#169; 2022 SIV</div>
        <div className="h-full w-full flex justify-center items-center px-16">
            <span className="mr-12 capitalize">terms of use</span>
            <span className="ml-12 capitalize">privacy policy</span>
        </div>
    </div>
  )
}

export default Footer