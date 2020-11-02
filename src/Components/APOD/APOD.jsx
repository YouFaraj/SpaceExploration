import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './subComponents/Card/Card.jsx'

const APOD = () => {
  const [data, setData] = useState(true)

  useEffect(() => {
    axios.get("/api/imageOfTheDay")
    .then(response => setData(response.data))
    .catch(err => console.error("FROM APOD: ", err))
  }, [])

  return  (
    typeof data === "boolean" ? "Loading" : <Card subData={data} />
  )
}

export default APOD;