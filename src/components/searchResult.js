import React from 'react';
import SearchReasultToken from '../components/searchResultToken.js';

export default (props) => {

    return (
        <div>
            <SearchReasultToken name="Please select a location below:" />
            <div id="TextArea">
                <SearchReasultToken name={props.name} />
            </div>
        </div>

    )


}