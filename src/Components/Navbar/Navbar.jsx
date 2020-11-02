import React from 'react';
import styles from './Navbar.modules.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  // [route, word] creates links. Can add more if needed. Place in order desired
  var navElements = [['/', 'Home'], ['/imageOfTheDay', 'APOD'], ['/weather', 'Martian Weather'], ['/rover', 'Rovers'], ['/random', 'Random Pics']]
  return (
    <div className={styles.container}>
      {navElements.map((elm, index) => <Link key={index} className={styles.navElm} to={elm[0]}>{elm[1]}</Link>)}
    </div>
  )
}

export default Navbar;