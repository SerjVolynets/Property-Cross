import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchReasultToken from './searchResultToken';

export default props => (
  <div>
    <SearchReasultToken name="Please select a location below:" />
    <div id="TextArea">
      <NavLink to="/listResult">
        {' '}
        <SearchReasultToken name={props.name} />
      </NavLink>
    </div>
  </div>
);
