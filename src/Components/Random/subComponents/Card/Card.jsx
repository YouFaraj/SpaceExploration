import React from 'react';
import styles from './Card.modules.css';

const Card = ({data}) => {
  return (
    <img className={styles.image} src={data} alt="" width="400" height="400" />
  )
}

export default Card;