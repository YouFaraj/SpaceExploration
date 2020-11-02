import React, {useState, useEffect} from 'react';
import axios from 'axios';
import APODCard from './subComponents/APODCard/APODCard.jsx'

const APOD = () => {
  const [data, setData] = useState(true)

  useEffect(() => {
    axios.get("/api/imageOfTheDay")
    .then(response => setData(response.data))
    .catch(err => console.error("FROM APOD: ", err))
  }, [])

  return  (
    typeof data === "boolean" ? "Loading" : <APODCard subData={data} />
  )
}

export default APOD;