import React from 'react';


const Card = ({data}) => {
  return (
    <div>
      <h4>Sol: {data.sol}</h4>
      <h4>Earth Date: {data.earth_date}</h4>
      <img src={data.img_src} alt="" width="400" height="400" />
    </div>
  )
}

export default Card;