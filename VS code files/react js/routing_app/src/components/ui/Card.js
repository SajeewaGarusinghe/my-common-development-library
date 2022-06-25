import cardCss from './card.module.css';

import React from 'react';

function Card(props) {
  return <div className={cardCss.card}>
    {props.children}
  </div>;
}

export default Card;
