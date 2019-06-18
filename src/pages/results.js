import React, { Component } from 'react';
import { connect } from 'react-redux';
class ResultList extends Component {

    render () {
        console.log(this.props);
        return <h1>Hi there</h1>
    }

}

function mapStateToProps(state) {
    return {
        valueInput: state.valueInput,
        showResult: state.showResult,
        listings: state.listings,
        searchLocation: state.searchLocation
    }
}

export default connect(mapStateToProps,null)(ResultList);