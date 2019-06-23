import React from 'react';

export default props => (
  <div className="listToken" onClick={props.onClick}>
    <img src={props.src} alt="No Img Sorry" />
    <h2>
      £
      {props.name}
      {' '}
    </h2>
    <p>{props.dis}</p>
  </div>
);
