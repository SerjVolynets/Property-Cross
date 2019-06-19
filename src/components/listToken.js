import React from 'react';
export default (props) => {
    return <div className="listToken" onClick={props.onClick}>
        <img src={props.src} alt='No Img Sorry'></img>
        <h1>{props.name} £</h1>
        <p>{props.dis}</p>
    </div>
}