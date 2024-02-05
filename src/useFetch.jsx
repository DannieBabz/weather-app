import { useState, useEffect } from "react";

const useFetch = () => {
      // const {data, isPending} = useFetch()
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [city, setCity] = useState([])
    // const API_KEY = "49e70472fb0fb3c11706ed617cb17a88";
    
    useEffect(() => {
      const locations = ["lagos", "abuja", "london", "texas", "sydney", "accra", "hongkong", "nairobi"];
      locations.map(() => {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      fetch("./src/Weather.json")
      .then((response) => response.json())
      .then((coords) => {
        setCity(locations)
      setData(coords);
      setIsPending(false);
      console.log(coords);
      // return <h1>${coords.main.temp - 273.15}</h1>
      // <p>${coords.weather[0].main}</p>
    });
    

    });
}, [])
    
  return { data, isPending, city };
};

export default useFetch;