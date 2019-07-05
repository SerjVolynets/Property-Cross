import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/button';
import Input from '../components/input';
import SearchResult from '../components/searchResult';
import SearchReasultToken from '../components/searchResultToken';
import {
  request, addValueInput, addValueForShowResult, wrongCity,
} from '../actions';

class Search extends Component {
  drawButtonFavorites = () => {
    const isFavoritesNotEmpty = this.props.favoritesList.length > 0;
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
            <Input type="text" onChange={event => this.props.addValueInput(event.target.value)} value={this.props.valueInput} />
            <Button name="Search" onClick={this.onSearchClick} className="btn btn-primary" id="search" />
            {this.drawSearchField()}
            {this.checkForData()}
          </form>
        </div>
      );
    }
}

Search.propTypes = {
  showResult: PropTypes.bool,
  isFavoritesNotEmpty: PropTypes.bool,
  checkForSearch: PropTypes.bool,
  searchLocation: PropTypes.string,
  valueInput: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.shape({
    center_lat: PropTypes.number,
    center_long: PropTypes.number,
    long_title: PropTypes.string,
    place_name: PropTypes.string,
    title: PropTypes.string,
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
  error: PropTypes.string,
  request: PropTypes.func,
  wrongCity: PropTypes.func,
  addValueForShowResult: PropTypes.func,
  addInputsValue: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    searchLocation: state.searchLocation,
    favoritesList: state.favoritesList,
    data: state.data,
    error: state.error,
    checkForSearch: state.checkForSearch,
  };
}


export default connect(mapStateToProps, {
  request, addValueInput, addValueForShowResult, wrongCity,
})(Search);
