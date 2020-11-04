import React from 'react';
import styles from './Rovers.modules.css';
import {Link} from 'react-router-dom';


const Rovers = () => {
  const rovers = [["/spirit","Spirit", "https://cornellsun.com/wp-content/uploads/2018/09/Pg-1-Mars-Rover-1.jpg"], ["/curiosity","Curiosity", "https://i.insider.com/56c4b521dd08959b618b4567?width=1100&format=jpeg&auto=webp"]]
  return (
    <div className={styles.rovers}>
     {rovers.map((elm, index) => <Link className={styles.roverNames} key={index} to={elm[0]}><div className={styles.innerCardRoverInfo}><span className={styles.name}>{elm[1]}</span><br></br> <img src={elm[2]} alt="" width="250" height="300" /></div></Link>)}
    </div>
  )
}

export default Rovers;