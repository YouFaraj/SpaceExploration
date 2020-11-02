import React, {useState} from 'react';
import axios from 'axios';
import CardList from './subComponents/CardList/CardList.jsx';

const Random = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [term, setTerm] = useState('');

  // helper functions
  const updateTerm = (e) => setTerm(e.target.value);
  const updateSearchTerm = (e) => setSearchTerm(term);

  return (
    <div>
      <h1>Here you can look up any images in the Nasa library</h1>
      <label>
        Search: <input onChange={updateTerm} value={term} type="text" />
      </label>
      <button type="submit" onClick={updateSearchTerm}>Search!</button><br></br>
      {searchTerm === ''? "Insert a search term" : <CardList term={searchTerm} />}
    </div>
  )
}

export default Random;