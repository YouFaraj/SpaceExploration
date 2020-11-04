import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Home.modules.css';
import Card from './subComponents/Card/Card.jsx';

const Home = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get("/api/homeImages")
    .then(response => setImages([response.data.image1, response.data.image2, response.data.image3, response.data.image4, response.data.image5]))
    .catch(err => console.error("FROM HOME: ", err))
  }, [])

  return (
     images.length === 0 ? "Loading" :  <Card images={images}/>
  )
}

export default Home;