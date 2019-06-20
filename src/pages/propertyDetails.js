import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';

class PropertyDetails extends Component {

    onClickFav = () => {
        let bool = true;
        this.props.favArr.map(
            (obj) => { return (obj.index === this.props.tokenObj.index) ? (bool = !bool) : null }
        )
        if (bool) {
            let arrTest = [];
            arrTest = this.props.favArr;

            arrTest.push(this.props.tokenObj);
            this.props.onAddFavor(arrTest);
        }
    }
    render() {
        return (
            <div>
                <NavLink to='/listResult' id='BackButton'>Назад</NavLink>
                <h2>Property Details</h2>
                <Button name='Add' onClick={this.onClickFav} />
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
        onAddFavor: (obj) => dispatch({
            type: 'onAddFavor',
            favor: obj
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)