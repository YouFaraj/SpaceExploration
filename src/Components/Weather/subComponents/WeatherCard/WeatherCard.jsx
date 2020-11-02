import React from 'react';
import styles from './WeatherCard.modules.css';


const Card = ({subData}) => {
  const convertToF = (celsius) => celsius * 9/5 + 32
  const newDate = (date) => date.substring(0, date.indexOf('T'))
  return (
    <div className={styles.container}>
      <h4>Sol: {subData.day}</h4>
      <h4>{newDate(subData.First_UTC)}</h4>
      <h4>Min Temp: {Math.floor(convertToF(subData.AT.mn))} F</h4>
      <h4>Max Temp: {Math.floor(convertToF(subData.AT.mx))} F</h4>
    </div>
  )
}

export default Card;