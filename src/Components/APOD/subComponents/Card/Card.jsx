import React from 'react';
import styles from './Card.modules.css';

const APODCard = ({subData}) => {
  return (
    <div>
      <div className={styles.card}>
        <img src={subData.hdurl} alt="" className={styles.img} />
        <div className={styles.infoBox}>
          <h3 className={styles.title}>Astronomy picture of the day</h3>
          <p className={styles.info}>{subData.explanation}</p>
        </div>
      </div>
    </div>
  )
}

export default APODCard;