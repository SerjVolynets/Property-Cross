import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { onDeleteFromFavorites } from '../actionsLogics/actionsFavoritesListPage';


class FavoritesList extends Component {
  constructor() {
    super();

    this.renderPart = () => {
      return JSON.parse(localStorage.getItem('favorites')).map((obj, index) => (
        <div key={obj.index}>
          <ListToken
            key={index}
            src={obj.src}
            name={obj.price}
            dis={obj.dis}
          />
          <Button name="Delete" className="btn btn-danger" id="deleteFavorites" onClick={() => onDeleteFromFavorites(index)} />
        </div>
      ));
    };
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
