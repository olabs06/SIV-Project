const City = ({ cityData }) => {
    console.log(cityData.img)
    return (
        <div className="relative" style={{
            background: ` url(${cityData.img}) no-repeat fixed center`
        }}>

        </div>
    )
}

export default City