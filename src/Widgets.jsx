import { useFetch } from "./useFetch";

const Widgets = () => {

  const [data, isPending, city] = useFetch()


    return ( 
        <>
            <div className="grid gap-20 grid-cols-4 w-screen">
                {isPending && <div className="widget">Loading...</div> }
                {data && 
                  city.map(() => {
                    <div className="widget">
                    <h2>{data.name}</h2>
                    <p>Temperature: {Math.round(data.main.temp - 273.15)}&deg;C</p>
                    <p>Weather: {data.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                  </div>
                  })
                  }
            </div>
        </>
     );
}
 
export default Widgets;