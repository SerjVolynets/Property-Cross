import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/button';
import Input from '../components/input';
import SearchResult from '../components/searchResult';
import SearchReasultToken from '../components/searchResultToken';
import {
  request, addInputsValue, addValueForShowResult, wrongCity,
} from '../actions';

class Search extends Component {
    drawButtonFavorites = () => {
      const isFavoritesNotEmpty = this.props.favoritesList.length > 0;
      console.log(this.props.favoritesList);
      if (isFavoritesNotEmpty) {
        return (
          <NavLink to="/favorites">
            <Button name="Favorites" id="favorites" className="btn btn-info" />
          </NavLink>
        );
      }
      return (
        <NavLink to="/">
          <Button name="Favorites" id="favorites" className="btn btn-info" />
        </NavLink>
      );
    };

    drawSearchField = () => {
      if (this.props.showResult) {
        return (
          <SearchResult name={this.props.searchLocation} />
        );
      }
      return <SearchReasultToken name={this.props.error} />;
    };

    onSearchClick = (event) => {
      event.preventDefault();
      if (this.props.valueInput.length < 1) {
        return;
      }
      this.props.request(this.props.valueInput);
    };

    checkForData = () => {
      if (this.props.checkForSearch) {
        console.log(this.props.locations);
        if (this.props.data.locations.length === 0) { this.props.wrongCity(); } else {
          this.props.addValueForShowResult(this.props.data.locations[0].long_title);
        }
      }
    }

    render() {
      return (
        <div>
          <h1>Property Cross in UK</h1>
          {this.drawButtonFavorites()}
          <p>
            Use the form below to search for houses to buy.
            You can search by place-name or postcode.
          </p>
          <form onSubmit={() => false}>
            <Input type="text" onChange={event => this.props.addInputsValue(event.target.value)} value={this.props.valueInput} />
            <Button name="Search" onClick={this.onSearchClick} className="btn btn-primary" id="search" />
            {this.drawSearchField()}
            {this.checkForData()}
          </form>
        </div>
      );
    }
}

Search.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.shape({
    dis: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
  })),
  showResult: PropTypes.bool,
  isFavoritesNotEmpty: PropTypes.bool,
  searchLocation: PropTypes.string,
  error: PropTypes.string,
  valueInput: PropTypes.string,
  checkForSearch: PropTypes.bool,
  locations: PropTypes.arrayOf(PropTypes.shape({
    center_lat: PropTypes.number,
    center_long: PropTypes.number,
    long_title: PropTypes.string,
    place_name: PropTypes.string,
    title: PropTypes.string,
  })),
  request: PropTypes.func,
  wrongCity: PropTypes.func,
  addValueForShowResult: PropTypes.func,
  addInputsValue: PropTypes.func,

};

function mapStateToProps(state) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    listings: state.listings,
    searchLocation: state.searchLocation,
    favoritesList: state.favoritesList,
    data: state.data,
    error: state.error,
    checkForSearch: state.checkForSearch,
  };
}


export default connect(mapStateToProps, {
  request, addInputsValue, addValueForShowResult, wrongCity,
})(Search);
