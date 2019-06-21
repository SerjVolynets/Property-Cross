import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';

class PropertyDetails extends Component {

    onClickFav = () => {
        let isNotAddedToFavorites = true;
        this.props.favArr.map(
            (obj) => { return (obj.index === this.props.tokenObj.index) ? (isNotAddedToFavorites = !isNotAddedToFavorites) : null; }
        )
        if (isNotAddedToFavorites) {
            let newArr = [];
            newArr = this.props.favArr;
            newArr.push(this.props.tokenObj);
            this.props.onAddFavor(newArr);
        }
        // this.getButtonName()
    }
    getButtonName = () => {
        let buttonName;
        let isNotAddedToFavorites = true;
        this.props.favArr.map(
            (obj) => { return obj.index === this.props.tokenObj.index ? (isNotAddedToFavorites = !isNotAddedToFavorites) : null }
        )
        isNotAddedToFavorites ? buttonName = 'Add to favorites' : buttonName = 'Added';
        return buttonName;
    }
    render() {
        console.log('hi there')
        return (
            <div>
                <NavLink to='/listResult' ><Button name="Back" className='btn btn-secondary' /></NavLink>
                <h2>Property Details</h2>
                <Button name={this.getButtonName()} className='btn btn-success' onClick={this.onClickFav} />
                <ListToken
                    key={this.props.tokenObj.index}
                    src={this.props.tokenObj.src}
                    name={this.props.tokenObj.price}
                    dis={this.props.tokenObj.dis}
                />
            </div>)
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        valueInput: state.valueInput,
        showResult: state.showResult,
        listings: state.listings,
        searchLocation: state.searchLocation,
        tokenObj: state.tokenObj,
        favArr: state.favArr
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAddFavor: (arr) => dispatch({
            type: 'onAddFavor',
            favor: arr
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)