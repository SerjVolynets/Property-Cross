import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken'

class ResultList extends Component {
    onClickToken = (index) => {
        console.log('Hi there ' + index)
        let tokenObj = {
            src: this.props.listings[index].img_url,
            price: this.props.listings[index].price,
            dis: this.props.listings[index].summary,
            index: index
        }
        console.log(tokenObj)
        this.props.onAddTokenObj(tokenObj)
    }
    render() {
        return (
            <div>
                <NavLink to='/' id='BackButton'>Назад</NavLink>
                {this.props.listings.map((obj, index) => {
                    return (
                        <NavLink to='/propertyDetails' key={index}>
                            <ListToken
                                key={index}
                                src={obj.img_url}
                                name={obj.price}
                                dis={obj.summary}
                                onClick={() => this.onClickToken(index)}
                            />
                        </NavLink>
                    )
                })}
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
        valueInput: state.valueInput,
        showResult: state.showResult,
        listings: state.listings,
        searchLocation: state.searchLocation,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAddTokenObj: (tokenObj) => dispatch({
            type: 'onAddTokenObj',
            tokenObj: tokenObj
        })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);