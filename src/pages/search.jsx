import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import SearchResult from '../components/searchResult';
import SearchReasultToken from '../components/searchResultToken';
import { buttonClick, onAdd } from '../actionsLogics/actionsSearchPage';
import store from '../store';

class Search extends Component {
  constructor() {
    super();
    this.isFavoritesEmpty = localStorage.getItem('favorites') !== null;
    this.buttonFavorites = () => {
      if (this.isFavoritesEmpty) {
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
    this.searchField = () => {
      if (this.props.showResult) {
        return (
          <SearchResult name={this.props.searchLocation} />
        )
      }
      return <SearchReasultToken name={this.props.searchLocation} />;
    };
  }

  render() {
    return (
      <div>
        <h1>Property Cross in UK</h1>
        {this.buttonFavorites()}
        <p>
            Use the form below to search for houses to buy. You can search by place-name or postcode.
        </p>
        <form onSubmit={() => false}>
          <Input type="text" onChange={event => store.dispatch(onAdd(event.target.value))} value={this.props.valueInput} />
          <Button name="Search" onClick={buttonClick} className="btn btn-primary" id="search" />
          {this.searchField()}
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
    favArr: state.favArr,
    one: state.one,
  };
}


export default connect(mapStateToProps)(Search);
