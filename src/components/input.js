import React from 'react';

export default (props) => {
    return (
        <input type={props.type} onChange={props.onChange} value={props.value} />
    )
}