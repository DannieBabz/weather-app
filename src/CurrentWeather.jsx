
const CurrentWeather = ({lat, lon, cardinal1, data, cardinal2}) => {
    const temp = data?.main?.temp;

    return ( 
        <>

        {temp == null ? 
            (<div className="text-5xl"><small>Loading...</small></div>
            ) : (<div className="text-5xl m-auto">
                <small>Today</small><br />
                <small>{lat}&deg;{cardinal1} {lon}&deg;{cardinal2}({data.name})</small><br />
                <h2 className="text-5xl text-bold text-white">{Math.round(temp -273.15)}&deg;C</h2>
            </div>)}

    

                
        </>
     );
}
 
export default CurrentWeather;