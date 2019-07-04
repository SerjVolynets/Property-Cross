import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { addToFavorite, removeFavorite, deleteFavorite } from '../actions';

class PropertyDetails extends Component {
  renderPart = () => {
    const { favoritesList } = this.props;
    const isAdded = favoritesList.some(el => el.src === this.props.tokenObj.src);
    if (isAdded) {
      return <Button name="Delete" className="btn btn-danger" onClick={this.props.deleteFavorite} />;
    }
    return <Button name="Add to Favorites" className="btn btn-success" onClick={this.props.addToFavorite} />;
  }

  render() {
    return (
      <div>
        <NavLink to="/listResult"><Button name="Back" className="btn btn-secondary" /></NavLink>
        <h2>Property Details</h2>
        {this.renderPart()}
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
    favoritesList: state.favoritesList,
  };
}


export default connect(
  mapStateToProps, { addToFavorite, removeFavorite, deleteFavorite },
)(PropertyDetails);
