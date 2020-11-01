import React from 'react';
import styles from './CardList.modules.css';
import Card from '../Card/Card.jsx';

const CardList = ({listData}) => {
  // filters extra keys coded into Nasa API
  const filterData = (data) => {
    for(var key in data) {
      if(key === 'sol_keys' || key === 'validity_checks') {
        delete data[key]
      }
    }
    return data;
  }

  // iterates over an object and places inner objects in an array
  const putObjectsInArray = (data) => {
    var arrayOfObjs = [];
    for(var key in data) {
      data[key]['day'] = key;
      arrayOfObjs.push(data[key]);
    }
    return arrayOfObjs;
  }

  const newListData = putObjectsInArray(filterData(listData));
  return (
    <div className={styles.container}>
      <h1>Martian Weather: </h1>
      {newListData.map((elm, index) => <Card key={index} subData={elm} />)}
    </div>
  )
}

export default CardList;