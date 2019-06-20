import React from 'react';
export default (props) => {
    return <div className="listToken" onClick={props.onClick}>
        <img src={props.src} alt='No Img Sorry'></img>
        <h2>£ {props.name} </h2>
        <p>{props.dis}</p>
    </div>
}