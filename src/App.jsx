import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import styles from './App.modules.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (

      <h1 className={styles.hw}>Hello World</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));