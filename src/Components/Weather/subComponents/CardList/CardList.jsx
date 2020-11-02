import React, {useState} from 'react';
import styles from './CardList.modules.css';
import Card from '../Card/Card.jsx';

const CardList = ({listData}) => {
  /////// helper functions
  // filters extra keys coded into Nasa API
  const filterData = (data) => {
    delete data['sol_keys'];
    delete data['validity_checks'];
    return data;
  }
  // places inner objects in an array and adds a day key
  const putObjectsInArray = (data) => {
    var arrayOfObjs = [];
    for(var key in data) {
      data[key]['day'] = key;
      arrayOfObjs.push(data[key]);
    }
    return arrayOfObjs;
  }
  ////////
  const newListData = putObjectsInArray(filterData(listData));

  return (
    <div className={styles.container}>
      <h1>Martian Weather: </h1>
      {newListData.map((elm, index) => <Card key={index} subData={elm} />)}
    </div>
  )
}

export default CardList;