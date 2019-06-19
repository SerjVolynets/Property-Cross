import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';




class PropertyDetails extends Component {
    
    onClickFav = () => {
        
        if (true) {
            console.log('add');
        }
        else {
            console.log('not add');   
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
        tokenObj: state.tokenObj
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)