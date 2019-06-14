import React, { Component } from 'react';
import Button from '../components/button.js';
import Input from '../components/input.js';
import SearchResult from '../components/searchResult.js';

class Search extends Component {

    // constructor() {

    // }


    state = {
        valueInput: ''
    }


    takeInputValue = (event) => {
        this.setState({ valueInput: event.target.value });  
    }

    buttonClick = (event) => {
        event.preventDefault();
        if (!this.state.valueInput.length) {
            return;
        }
        this.setState({ valueInput: '' })
        this.seenRequest();

    }

    seenRequest = function sendRequest() {
        let loc = this.state.valueInput;
        let objTest;
        this.setState({
            test: 1
        })
        fetch('https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=' + loc)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.response.locations);
                // bindState({
                //     response: data.response
                // })
                return objTest = data.response;
            })
            .catch(function (err) { console.log('error ', err) });
        console.log(objTest);
        console.log(this.state.test);

    }

    render() {
        return <div>
            <form onSubmit={() => false}>
                <Input type="text" onChange={this.takeInputValue} value={this.state.valueInput} />
                <Button name="Search" onClick={this.buttonClick} />
                {/* <SearchResult name={this.state} /> */}
            </form>
        </div>
    }
}

export default Search;