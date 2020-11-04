import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.jsx';
import axios from 'axios';
import styles from './CardList.modules.css';


const CardList = ({term}) => {
  const [images, setImages] = useState('')

  //helper functions
  // limits the images to 5 and shapes the data to an array of urls
  const firstFiveImages = (images, imageArray = []) => {
    for(var image of images) {
      if(imageArray.length === 5 ) break;
      imageArray.push(image.links[0].href)
    }
    setImages(imageArray)
  }

  useEffect(() => {
    axios.get(`/api/random/${term}`)
    .then(response => firstFiveImages(response.data))
    .catch(err => console.error("FROM RANDOM CARDLIST: ", err))
  }, [term])

  return (
    <div className={styles.container}>
      {typeof images === "string" ? "Loading" : images.map((elm, index) => <Card key={index} data={elm} />)}
    </div>
  )
}

export default CardList