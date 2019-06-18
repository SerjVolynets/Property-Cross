import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import ListToken from '../components/listToken'
class ResultList extends Component {
    
    render () {
        return (
           <div>
           <NavLink to='/' id='BackButton'>Назад</NavLink>
                {this.props.listings.map((obj,index)=>{
                return (
                    <ListToken
                      key = {index}
                      src={obj.img_url} 
                      name={obj.price} 
                      dis={obj.summary}
                    />
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

export default connect(mapStateToProps)(ResultList);