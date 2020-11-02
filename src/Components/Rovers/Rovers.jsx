import React from 'react';
import styles from './Rovers.modules.css';
import {Link} from 'react-router-dom';


const Rovers = () => {
  const rovers = [["/spirit","Spirit"], ["/curiosity","Curiosity"]]
  return (
    <div className={styles.rovers}>
     {rovers.map((elm, index) => <Link className={styles.roverNames} key={index} to={elm[0]}>{elm[1]}</Link>)}
    </div>
  )
}

export default Rovers;