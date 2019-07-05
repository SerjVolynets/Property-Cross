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
  listings: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    img_url: PropTypes.string,
    price: PropTypes.number,
  })),
  favoritesList: PropTypes.arrayOf(PropTypes.shape({
    dis: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
  })),
  data: PropTypes.shape({
    listings: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      img_url: PropTypes.string,
      price: PropTypes.number,
    })),
    locations: PropTypes.arrayOf(PropTypes.shape({
      center_lat: PropTypes.number,
      center_long: PropTypes.number,
      long_title: PropTypes.string,
      place_name: PropTypes.string,
      title: PropTypes.string,
    })),
  }),
  addValuesForTokenProperty: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    listings: state.listings,
    favoritesList: state.favoritesList,
    data: state.data,
  };
}
export default connect(mapStateToProps, { addValuesForTokenProperty })(ResultList);
