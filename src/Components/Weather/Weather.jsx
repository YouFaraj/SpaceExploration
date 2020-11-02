import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardList from './subComponents/CardList/CardList.jsx';

const Weather = () => {
  const [data, setData] = useState("")


  useEffect(() => {
    axios.get("/api/weather")
    .then(response => setData(response.data))
    .catch(err => console.error("FROM WEATHER: ", err))
  }, [])

  return(
      typeof data === "string" ? "Loading" : <CardList listData={data} />
    )
}

export default Weather;



