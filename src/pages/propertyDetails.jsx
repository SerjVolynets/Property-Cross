import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { onChangeButton, onDeleteFavorites, onAddToFavorites } from '../actionsLogics/actionsPropertyDetails';

class PropertyDetails extends Component {
  constructor() {
    super();
    this.buttonToAddOrDelete = () => {
      if (onChangeButton()) {
        return <Button name="Delete" className="btn btn-danger" onClick={onDeleteFavorites} />;
      }
      return <Button name="Add to Favorites" className="btn btn-success" onClick={onAddToFavorites} />;
    };
  }

  render() {
    console.log('fasd');
    return (
      <div>
        <NavLink to="/listResult"><Button name="Back" className="btn btn-secondary" /></NavLink>
        <h2>Property Details</h2>
        {this.buttonToAddOrDelete()}
        <ListToken
          key={this.props.tokenObj.index}
          src={this.props.tokenObj.src}
          name={this.props.tokenObj.price}
          dis={this.props.tokenObj.dis}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    valueInput: state.valueInput,
    showResult: state.showResult,
    listings: state.listings,
    searchLocation: state.searchLocation,
    tokenObj: state.tokenObj,
    favArr: state.favArr,
  };
}


export default connect(mapStateToProps)(PropertyDetails);
