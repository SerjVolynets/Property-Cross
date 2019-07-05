import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { addValuesForTokenProperty } from '../actions';

class ResultList extends Component {
  renderPart = () => {
    return (
      this.props.data.listings.map((obj, index) => (
        <NavLink to="/propertyDetails" key={index}>
          <ListToken
            key={index}
            src={obj.img_url}
            name={obj.price}
            dis={obj.title}
            onClick={() => this.props.addValuesForTokenProperty(index)}
          />
        </NavLink>
      ))
    );
  }

  render() {
    return (
      <div>
        <NavLink to="/"><Button name="Back" className="btn btn-secondary" /></NavLink>
        {this.renderPart()}
      </div>
    );
  }
}

ResultList.propTypes = {
  listings: PropTypes.array,
  addValuesForTokenProperty: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    listings: state.listings,
    searchLocation: state.searchLocation,
    favoritesList: state.favoritesList,
    data: state.data,
  };
}
export default connect(mapStateToProps, { addValuesForTokenProperty })(ResultList);
