import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';
import styles from './CardList.modules.css';

const Rover = () => {
  const name = window.location.pathname.substring(1);
  const [date, setDate] = useState("2020-11-01");
  const [data, setData] = useState("Loading");
  const updateData = (e) => setDate(e.target.value);
  useEffect(() => {
    axios.get(`/api/rover/${name}&&${date}`)
    .then(response =>  checkIfDateIsValid(response.data))
    .then(obj => setData(obj))
    .catch(err => console.error('FROM ROVER: ', err))
  }, [date])

  return (
    <div>
      <div className={styles.info}>
        <h3>Hi! I am {name}, check out my awesome photos!</h3>
        <label>Choose a different date: <input type="date" value={date} onChange={updateData} /> FYI - {activeDates(name)} </label><br></br>
      </div>
      <div className={styles.container}>
        {typeof data === "string" ? data : data.photos.map((elm, index) => <Card key={index} data={elm} />)}
      </div>
    </div>

  )
}


const activeDates = (name) => name === "curiosity" ? "I was active from August 6th 2012 and I am still active" : "I was active from January 5th 2004 to 2010";

const checkIfDateIsValid = (obj) => obj.photos.length === 0 ? obj = "Try another date" : obj;




export default Rover;


