import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { onClickToken } from '../actionsLogics/actionsResultsPage';

class ResultList extends Component {
  render() {
    return (
      <div>
        <NavLink to="/"><Button name="Back" className="btn btn-secondary" /></NavLink>
        {this.props.listings.map((obj, index) => (
          <NavLink to="/propertyDetails" key={index}>
            <ListToken
              key={index}
              src={obj.img_url}
              name={obj.price}
              dis={obj.title}
              onClick={() => onClickToken(index)}
            />
          </NavLink>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    listings: state.listings,
    searchLocation: state.searchLocation,
    favArr: state.favArr,
  };
}
export default connect(mapStateToProps)(ResultList);