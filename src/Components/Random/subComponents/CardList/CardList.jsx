import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.jsx';
import axios from 'axios';


const CardList = ({term}) => {
  const [images, setImages] = useState('')

  //helper functions
  // limits the images to 5 and shapes the data to an array of urls
  const firstFiveImages = (images, imageArray = []) => {
    for(var image of images) {
      if(imageArray.length === 5) return imageArray;
      imageArray.push(image.links[0].href)
    }
    return imageArray;
  }

  useEffect(() => {
    axios.get(`/api/random/${term}`)
    .then(response => setImages(response.data))
    .catch(err => console.error("FROM RANDOM CARDLIST: ", err))
  }, [images])

  const fiveImages = firstFiveImages(images);
  return (
    typeof images === "string" ? "Loading" : fiveImages.map((elm, index) => <Card key={index} data={elm} />)
  )
}

export default CardList