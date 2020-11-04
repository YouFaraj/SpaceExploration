import React from 'react';
import styles from './Card.modules.css';


const Card = ({data}) => {
  return (
    <div className={styles.card}>
      <h4>Sol: {data.sol}</h4>
      <h4>Earth Date: {data.earth_date}</h4>
      <img src={data.img_src} alt="" width="400" height="400" />
    </div>
  )
}

export default Card;