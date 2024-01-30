
const CurrentWeather = ({lat, lon}) => {
    var weather = "25C"
    return ( 
        <>
            <div className="text-5xl">
                <small>Today</small><br />
                <small>{lat}, {lon}</small>
                <h2 className="text-5xl text-bold text-white">{weather}</h2>
            </div>
        </>
     );
}
 
export default CurrentWeather;