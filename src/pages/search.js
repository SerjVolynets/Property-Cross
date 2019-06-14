import React, { Component } from 'react';
import Button from '../components/button.js';
import Input from '../components/input.js';

class Search extends Component {

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
        fetch('https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=' + loc)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) { console.log('error ', err) });
    }

    render() {
        return <div>
            <form onSubmit={() => false}>
                <Input type="text" onChange={this.takeInputValue} value={this.state.valueInput} />
                <Button name="Search" onClick={this.buttonClick} />
            </form>
        </div>
    }
}

export default Search;