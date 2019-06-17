import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../components/button.js';
import Input from '../components/input.js';
import SearchResult from '../components/searchResult.js';

class Search extends Component {

    takeInputValue = (event) => {
        this.setState({ valueInput: event.target.value });
    }

    buttonClick = (event) => {
        event.preventDefault();
        if (!this.props.valueInput.length) {
            return;
        }
        this.setState({ valueInput: '' })
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
                this.setState({
                    listings: data.response.listings,
                    searchLocation: data.response.locations[0].long_title,
                    showResult: true
                });
                console.log(this.props.listings);
                console.log(this.props.searchLocation);
            })
            .catch((err) => {
                console.log('error ', err)
                this.setState({
                    searchLocation: 'Sorry \'' + loc + '\' does not exist',
                    showResult: true
                })
            });

    };

    render() {
        console.log(this.props);
        return <div>
            <form onSubmit={() => false}>
                <Input type="text" onChange={this.takeInputValue} value={this.props.valueInput} />
                <Button name="Search" onClick={this.buttonClick} />
                {this.props.showResult ? <SearchResult name={this.props.searchLocation} /> : null}
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        valueInput: state.valueInput,
        showResult: state.showResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({ type: 'ADD' }),
        onReturn: () => dispatch({ type: 'RETURN' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);