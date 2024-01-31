import { useState } from "react";

let locations = ["lagos", "abuja", "london", "newyork", "sydney", "accra", "hongkong", "nairobi"];

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  locations.map((city) => {
    const API_KEY = "49e70472fb0fb3c11706ed617cb17a88";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((coords) => {
        setData(coords);
        setIsPending(false);
        console.log(coords);
        console.log(Math.round(coords.main.temp - 273.15));
      });
  });

  return { data, isPending };
};

export default useFetch;
