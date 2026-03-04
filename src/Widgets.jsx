import useFetch from "./useFetch";

const Widgets = () => {

  const [data, isPending] = useFetch()


    return ( 
        <section className="max-w-7xl overflow-y-auto mx-auto">
            <div className="grid grid-cols-4 justify-items-center gap-10 mt-5">
                {isPending && <div className="widget">Loading...</div> }
                {!isPending && 
                  data.map((weather, index) => (
                    <div key={index} className="widget text-center">
                    <h2>{weather.name}</h2>
                    <p>{Math.round(weather.main.temp - 273.15)}&deg;C</p>
                    <p>{weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                  </div>
                  ))
                  }
            </div>
        </section>
     );
}
 
export default Widgets;