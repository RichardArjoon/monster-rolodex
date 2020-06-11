import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set=2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
      <p>{props.monster.address.street}</p>
      <p>{props.monster.website}</p>
    </div>
  );
};

export default Card;
