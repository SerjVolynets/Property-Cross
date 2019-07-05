import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListToken from '../components/listToken';
import Button from '../components/button';
import { removeFavorite } from '../actions';


class FavoritesList extends Component {
  renderPart = () => {
    const { favoritesList } = this.props;

    return favoritesList.map((obj, index) => (
      <div key={`item-${index}`}>
        <ListToken
          src={obj.src}
          name={obj.price}
          dis={obj.dis}
        />
        <Button
          name="Delete"
          className="btn btn-danger"
          id="deleteFavorites"
          onClick={() => this.props.removeFavorite(obj.src)}
        />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <NavLink to="/"><Button name="Back" className="btn btn-secondary" /></NavLink>
        {this.renderPart()}
      </div>
    );
  }
}

FavoritesList.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.shape({
    dis: PropTypes.string,
    price: PropTypes.number,
    src: PropTypes.string,
  })),
  removeFavorite: PropTypes.func
};

const mapStateToProps = ({ favoritesList }) => ({ favoritesList });

export default connect(mapStateToProps, { removeFavorite })(FavoritesList);
