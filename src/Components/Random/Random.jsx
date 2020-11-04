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

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.search}>Search: </span><input className={styles.input} placeholder="Insert a search term" onChange={updateTerm} value={term} type="text" />
      <button className={styles.button} type="submit" onClick={updateSearchTerm}>Take Off!</button><br></br>
      </label>
      {searchTerm === ''? "" : <CardList term={searchTerm} />}
    </div>
  )
}

export default Random;