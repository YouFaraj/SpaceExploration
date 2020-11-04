import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Styling
import styles from './App.modules.css';
// Components
import CardList from './Components/Rovers/subComponents/CardList/CardList.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import APOD from './Components/APOD/APOD.jsx';
import Rovers from './Components/Rovers/Rovers.jsx';
import Weather from './Components/Weather/Weather.jsx';
import Random from './Components/Random/Random.jsx';
import Home from './Components/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/spirit"> <CardList /> </Route>
        <Route exact path="/curiosity"> <CardList /> </Route>
        <Route exact path="/random"> <Random /> </Route>
        <Route exact path="/imageOfTheDay"> <APOD /> </Route>
        <Route exact path="/weather"> <Weather /> </Route>
        <Route exact path="/rover"> <Rovers /> </Route>
      </Switch>
    </div>
  )
}



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));