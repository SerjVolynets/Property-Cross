import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import SearchResult from '../components/searchResult';
import SearchReasultToken from '../components/searchResultToken';
import {
  request, onAdd, onAddObj, onError,
} from '../actions';

class Search extends Component {
    buttonFavorites = () => {
      const isFavoritesEmpty = this.props.favoritesList.length > 0;
      if (isFavoritesEmpty) {
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

    searchField = () => {
      if (this.props.showResult) {
        return (
          <SearchResult name={this.props.searchLocation} />
        );
      }
      return <SearchReasultToken name={this.props.error} />;
    };

    buttonClick = (event) => {
      event.preventDefault();
      if (this.props.valueInput.length < 1) {
        return;
      }
      this.props.request(this.props.valueInput);
    };

    onAddObj = () => {
      if (this.props.request2) {
        if (this.props.data.locations.length === 0) { this.props.onError(); } else {
          this.props.onAddObj(this.props.data.locations[0].long_title);
        }
      }
    }

    render() {
      return (
        <div>
          <h1>Property Cross in UK</h1>
          {this.buttonFavorites()}
          <p>
            Use the form below to search for houses to buy.
            You can search by place-name or postcode.
          </p>
          <form onSubmit={() => false}>
            <Input type="text" onChange={event => this.props.onAdd(event.target.value)} value={this.props.valueInput} />
            <Button name="Search" onClick={this.buttonClick} className="btn btn-primary" id="search" />
            {this.searchField()}
            {this.onAddObj()}
          </form>
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
    favoritesList: state.favoritesList,
    data: state.data,
    error: state.error,
    request2: state.request2,
  };
}

export default connect(mapStateToProps, {
  request, onAdd, onAddObj, onError,
})(Search);
