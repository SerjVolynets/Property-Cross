import React, { Component } from 'react';
import Button from '../components/button.js';
import Input from '../components/input.js';
import SearchResult from '../components/searchResult.js';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            valueInput: ''
        }
        // this.setState = this.setState.bind(this);
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

    seenRequest = () => {
        let loc = this.state.valueInput;
        console.log(loc);
        fetch('https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=' + loc)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.response.locations);
                this.setState({
                    test: data.response.locations
                })
            })
            .catch(function (err) { console.log('error ', err) });
        // console.log(objTest);
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