import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';

const Rover = () => {
  const [date, setDate] = useState("2020-11-01");
  const name = window.location.pathname.substring(1);
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`/api/rover/${name}&&${date}`)
    .then(response => setData(response.data))
    .catch(err => console.error('FROM ROVER: ', err))
  }, [])

  return (
    typeof data === "string" ? "Loading" : data.photos.map((elm, index) => <Card key={index} data={elm} />)
  )
}




export default Rover;


