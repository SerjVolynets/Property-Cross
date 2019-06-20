import React from 'react';
export default (props) => {
    return (
        <button onClick={props.onClick} className={props.className} id={props.id}>{props.name}</button>
    )
}