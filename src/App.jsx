import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import styles from './App.modules.css';
import APOD from './Components/APOD.jsx';
import Rovers from './Components/Rovers.jsx';
import Weather from './Components/Weather.jsx';

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <NavLink className={styles.navElm} to="/" active="selected">
          Home
        </NavLink>
        <NavLink className={styles.navElm} to="/imageOfTheDay" active="selected">
          APOD
        </NavLink>
        <NavLink className={styles.navElm} to="/weather" active="selected">
          Mars Weather
        </NavLink>
        <NavLink className={styles.navElm} to="/rover" active="selected">
          Rovers
        </NavLink>
      </div>

      <Switch>
        <Route path="/imageOfTheDay">
          <APOD />
        </Route>

        <Route path="/weather">
          <Weather />
        </Route>

        <Route path="/rover">
          <Rovers />
        </Route>
      </Switch>
    </div>
  )
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));