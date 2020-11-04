import React, {useState} from 'react';
import axios from 'axios';
import CardList from './subComponents/CardList/CardList.jsx';
import styles from './Random.modules.css';


const Random = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [term, setTerm] = useState('');

  // helper functions
  const updateTerm = (e) => setTerm(e.target.value);
  const updateSearchTerm = (e) => setSearchTerm(term);
  // easter egg
  const addDeadPool = (searchTerm, component) => {
    if(searchTerm === "") return ""
    if(searchTerm === "chimichanga") return <img src="https://i.pinimg.com/564x/f3/04/01/f30401330019fb0d05cb39a281c2441a.jpg" alt="" />
    return component
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.search}>Search: </span><input className={styles.input} placeholder="chimichanga" onChange={updateTerm} value={term} type="text" />
      <button className={styles.button} type="submit" onClick={updateSearchTerm}>Take Off!</button><br></br>
      </label>
      {addDeadPool(searchTerm, <CardList term={searchTerm} />)}
    </div>
  )
}

export default Random;