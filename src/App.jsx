import CurrentWeather from "./CurrentWeather";
import Widgets from "./Widgets";
import Search from './Search'
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

// import { DmsCoordinates } from "dms-conversion";


export default function App() {
  const [location, setLocation] = useState({})
  const [search, setSearch] = useState()
  const [searchData, setSearchData] = useState({})
  const [data, setData] = useState({})
  

  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const latDegrees= Math.round(location.lat)
  const longDegrees = Math.floor(location.long)
  
  let cardinal1 = latDegrees >= 0 ? 'N' : 'S';
  let cardinal2 = longDegrees >= 0 ? 'E' : 'W';

const handleSearch = useCallback(
  debounce((value) => {
    setSearch(value);
  }, 100), // adjust delay as needed
  []
)


  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({lat: position.coords.latitude, long: position.coords.longitude})
  
                
})
  }, [])

  useEffect(() => {
    if (search){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((weatherData) => {
        console.log(weatherData);
        setSearchData(weatherData);
        
      })
      .catch((err) => console.error("Fetch error:", err));
  }
    }, [API_KEY, search]) // Depend on `search` change
  
  

  useEffect(() => {
    if (location.lat !== undefined && location.long !== undefined) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((weatherData) => {
          console.log(weatherData);
          setData(weatherData);
          
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [location]); // Depend on `location` change
  return (
    <section className="max-w-7xl overflow-y-auto bg-scroll mx-auto px-4">
    <div className="flex font-heading">
      <div className="flex justify-between items-center mx-auto gap-x-8">
      <h1 className="text-white mx-auto w-80 text-7xl">Weather App</h1>
      <input type="text" id="search" value={search} onChange={(e) => handleSearch(e.target.value)} className="m-auto p-5 h-5 w-96 rounded-full focus:outline-none" placeholder="Search City, State, etc" />
      <Search searchData={searchData} />
      <CurrentWeather lat={latDegrees} lon={longDegrees} cardinal1={cardinal1} cardinal2={cardinal2} data={data}/>

      </div>
      </div>
    <div className="overflow-y-auto font-heading">
      <Widgets/>
    </div>
    </section>
  )
}