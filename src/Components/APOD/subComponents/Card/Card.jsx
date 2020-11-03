import React from 'react';

const APODCard = ({subData}) => {
  return (
    <div>
      <h3>Astronomy picture of the day</h3>
      <img src={subData.hdurl} alt="" width="800px" height="700px" />
      <p>{subData.explanation}</p>
    </div>
  )
}

export default APODCard;