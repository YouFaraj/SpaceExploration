import React, {useState} from 'react';
import styles from './CardList.modules.css';
import Card from '../Card/Card.jsx';

const CardList = ({listData}) => {
  /////// helper functions
  // filters extra keys coded into Nasa API
  const filterData = (data) => {
    delete data['sol_keys'];
    delete data['validity_checks'];
    for(var key in data) {
      if(!data[key].AT) {
        delete data[key];
      }
    }
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
      <div>
        <h1 className={styles.title}>Martian Weather: </h1>
      </div>
      <div className={styles.cardContainer}>
        {newListData.map((elm, index) => <Card key={index} subData={elm} />)}
      </div>
    </div>
  )
}

export default CardList;