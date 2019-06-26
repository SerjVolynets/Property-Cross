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
  render() {
    return (
      <div>
        <h1>Property Cross in UK</h1>
        {(localStorage.getItem('favorites') !== null) ? (
          <NavLink to="/favorites">
            <Button name="Favorites" id="favorites" className="btn btn-info" />
          </NavLink>
        ) : (
          <NavLink to="/">
            <Button name="Favorites" id="favorites" className="btn btn-info" />
          </NavLink>
        )}
        <p>
            Use the form below to search for houses to buy. You can search by place-name or postcode.
        </p>
        <form onSubmit={() => false}>
          <Input type="text" onChange={event => store.dispatch(onAdd(event.target.value))} value={this.props.valueInput} />
          <Button name="Search" onClick={buttonClick} className="btn btn-primary" id="search" />
          {this.props.showResult ? <SearchResult name={this.props.searchLocation} /> : <SearchReasultToken name={this.props.searchLocation} />}
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
