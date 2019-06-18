import React, { Component } from 'react';

export default (props) => {
    return <div>
        <img src={props.src}></img>
        <h1>{props.name} £</h1>
        <p>{props.dis}</p>
    </div>
}