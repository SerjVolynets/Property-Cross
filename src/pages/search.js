import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/button.js';
import Input from '../components/input.js';
import SearchResult from '../components/searchResult.js';

class Search extends Component {

    buttonClick = (event) => {
        event.preventDefault();
        if (!this.props.valueInput.length) {
            return;
        }
        this.props.onReturn();
        this.seenRequest();
    }

    seenRequest = () => {
        let loc = this.props.valueInput;
        fetch('https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=' + loc)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.props.onAddObj(data.response.listings, data.response.locations[0].long_title)
                console.log(this.props.listings);
                console.log(this.props.searchLocation);
            })
            .catch((err) => {
                console.log('error ', err)
                this.props.onError(loc)
            });
    };
    newPageList = () => {

    }
    render() {
        return <div>
            <h1>Property Cross in UK</h1>
            <p>Use the form below to search for houses to buy. You can search by place-name or postcode.</p>
            <form onSubmit={() => false}>
                <Input type="text" onChange={(event) => this.props.onAdd(event.target.value)} value={this.props.valueInput} />
                <Button name="Search" onClick={this.buttonClick} />
                {this.props.showResult ? <SearchResult name={this.props.searchLocation} /> : null}
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        valueInput: state.valueInput,
        showResult: state.showResult,
        listings: state.listings,
        searchLocation: state.searchLocation,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (value) => dispatch({ type: 'ADD', inputValue: value }),
        onAddObj: (listings, searchLocation) => dispatch({
            type: 'AddObj',
            listings: listings,
            searchLocation: searchLocation,
        }),
        onReturn: () => dispatch({ type: 'RETURN' }),
        onError: (value) => dispatch({ type: 'Error', searchLocation: 'Sorry \'' + value + '\' does not exist' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);