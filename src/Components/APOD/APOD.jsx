import React, {useState, useEffect} from 'react';
import axios from 'axios';

const APOD = () => {
  const [image, setImage] = useState("#")

  useEffect(() => {
    axios.get("/api/imageOfTheDay")
    .then(response => setImage(response.data.hdurl))
    .catch(err => console.error("FROM APOD: ", err))
  }, [])

  return  <img src={image} width="200px" height="300px" />
}

export default APOD;