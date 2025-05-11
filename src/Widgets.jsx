import useFetch from "./useFetch";

const Widgets = () => {

  const [data, isPending] = useFetch()


    return ( 
        <>
            <div className="grid gap-20 grid-cols-4 w-screen">
                {isPending && <div className="widget">Loading...</div> }
                {!isPending && 
                  data.map((weather, index) => (
                    <div key={index} className="widget">
                    <h2>{weather.name}</h2>
                    <p>{Math.round(weather.main.temp - 273.15)}&deg;C</p>
                    <p>{weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                  </div>
                  ))
                  }
            </div>
        </>
     );
}
 
export default Widgets;