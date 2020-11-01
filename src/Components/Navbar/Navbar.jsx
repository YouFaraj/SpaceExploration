import React from 'react';
import styles from './Navbar.modules.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  // [route, word] can add more to the end if need be.
  var navElements = [['/', 'Home'], ['/imageOfTheDay', 'APOD'], ['/weather', 'Mars Weather'], ['/rover', 'Rovers']]
  return (
    <div className={styles.container}>
      {navElements.map((elm, index) => <Link key={index} className={styles.navElm} to={elm[0]}>{elm[1]}</Link>)}
    </div>
  )
}

export default Navbar;