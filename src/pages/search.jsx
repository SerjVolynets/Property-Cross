import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import SearchResult from '../components/searchResult';
import SearchReasultToken from '../components/searchResultToken';

class Search extends Component {
    buttonClick = (event) => {
      event.preventDefault();
      if (!this.props.valueInput.length) {
        return;
      }
      this.seenRequest();
    }

    seenRequest = () => {
      const location = this.props.valueInput;
      fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${location}`)
        .then(response => response.json())
        .then((data) => {
          this.props.onAddObj(data.response.listings, data.response.locations[0].long_title);
        })
        .catch((err) => {
          this.props.onError(location);
        });
    };

    render() {
      return (
        <div>
          <h1>Property Cross in UK</h1>
          {(this.props.favArr.length > 0) ? (
            <NavLink to="/favorites">
              <Button name="Favorites" id="favorites" className="btn btn-info" />
            </NavLink>
          ) : (
            <NavLink to="/">
              <Button name="Favorites" id="favorites" className="btn btn-info" />
            </NavLink>
          )}
          <p>Use the form below to search for houses to buy. You can search by place-name or postcode.</p>

          <form onSubmit={() => false}>
            <Input type="text" onChange={event => this.props.onAdd(event.target.value)} value={this.props.valueInput} />
            <Button name="Search" onClick={this.buttonClick} className="btn btn-primary" id="search" />
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: value => dispatch({ type: 'ADD', inputValue: value }),
    onAddObj: (listings, searchLocation) => dispatch({
      type: 'AddObj',
      listings,
      searchLocation,
    }),
    onError: value => dispatch({ type: 'Error', searchLocation: `Sorry '${value}' does not exist` }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);