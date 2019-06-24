import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';


class FavoritesList extends Component {
  render() {
    return (
      <div>
        <NavLink to="/"><Button name="Back" className="btn btn-secondary" /></NavLink>
        {this.props.favArr.map(obj => (
          <ListToken
            key={obj.index}
            src={obj.src}
            name={obj.price}
            dis={obj.dis}
          />
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


export default connect(mapStateToProps)(FavoritesList);
