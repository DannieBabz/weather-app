import { useState, useEffect } from "react";


const useFetch = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [cities] = useState(["lagos", "abuja", "london", "texas", "sydney", "accra", "hongkong", "nairobi"]);
  const API_KEY = import.meta.env.VITE_API_KEY;
 
  

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        // Simulate fetching for multiple cities (in this case from a local JSON)
        const requests = cities.map( city => 
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
         .then((res) => res.json())
         )
         
         const results = await Promise.all(requests);
        setData(results);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setData([]);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return [data, isPending ];
};

export default useFetch;