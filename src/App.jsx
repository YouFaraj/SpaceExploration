import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Styling
import styles from './App.modules.css';
// Components
import Navbar from './Components/Navbar/Navbar.jsx'
import APOD from './Components/APOD/APOD.jsx';
import Rovers from './Components/Rovers/Rovers.jsx';
import Weather from './Components/Weather/Weather.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
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