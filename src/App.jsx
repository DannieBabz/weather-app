import CurrentWeather from "./CurrentWeather";
import Widgets from "./Widgets";
import Search from './Search'
import { useState, useEffect } from 'react';
// import { DmsCoordinates } from "dms-conversion";


export default function App() {
  const [location, setLocation] = useState({})
  const [search, setSearch] = useState()
  const [data, setData] = useState({})
  const [searchData, setSearchData] = useState({})
  

  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const latDegrees= Math.round(location.lat)
  const longDegrees = Math.floor(location.long)
  
  let cardinal1 = latDegrees >= 0 ? 'N' : 'S';
  let cardinal2 = longDegrees >= 0 ? 'E' : 'W';

const handleSearch = (e) => {
  setSearch(e.target.value)
}


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
    }, [search])
  
  

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
    <>
    <div className="flex m-auto font-heading">
      <div className="flex w-3/4">
      <h1 className="text-white w-5 m-auto text-7xl">Weather App</h1>
      <input type="text" id="search" value={search} onChange={handleSearch} className="m-auto p-5 h-5 w-96 rounded-full focus:outline-none" placeholder="Search City, State, etc" />

      </div>
      <Search searchData={searchData} />
      <CurrentWeather lat={latDegrees} lon={longDegrees} cardinal1={cardinal1} cardinal2={cardinal2} data={data}/>
      </div>
    <div className="mt-20 ml-20 font-heading">
      <Widgets/>
    </div>
    </>
  )
}