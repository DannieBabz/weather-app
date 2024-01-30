import CurrentWeather from "./CurrentWeather";
import Widgets from "./Widgets";
import { useState, useEffect } from 'react';


export default function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({lat: position.coords.latitude, lon: position.coords.longitude})
})
  }, [])
  return (
    <>
    <div className="m-20 font-heading flex justify-between items-center">
      <h1 className="text-white w-5 text-7xl">Weather App</h1>
      <input type="text" id="search" className="m-auto p-5 h-5 w-96 rounded-full focus:outline-none" placeholder="Search City, State, etc" />
      <CurrentWeather lat={location.lat} lon={location.lon} />
    </div>
    <div className="mt-20 ml-20 font-heading">
      <Widgets/>
    </div>
    </>
  )
}