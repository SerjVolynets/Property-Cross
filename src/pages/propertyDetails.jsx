import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListToken from '../components/listToken';
import Button from '../components/button';
import Actions from '../actions';

class PropertyDetails extends Component {
    onClickFav = () => {
      let isNotAddedToFavorites = true;
      console.log(JSON.parse(localStorage.getItem('favorites')));
      if (localStorage.getItem('favorites') === null) {
        console.log('hi there');
        let newArr = [];
        newArr.push(this.props.tokenObj);
        localStorage.setItem('favorites', JSON.stringify(newArr));
        console.log(JSON.parse(localStorage.getItem('favorites')));
      }
      else {
        JSON.parse(localStorage.getItem('favorites')).map(
              obj => (
                (obj.src === this.props.tokenObj.src) ? isNotAddedToFavorites = !isNotAddedToFavorites : null),
            );

            if (isNotAddedToFavorites) {
              let newArr = JSON.parse(localStorage.getItem('favorites'));
              newArr.push(this.props.tokenObj);
                // this.props.favArr.push(this.props.tokenObj);
                // newArr = newArr.concat(this.props.favArr);
                localStorage.setItem('favorites', JSON.stringify(newArr));
                console.log(JSON.parse(localStorage.getItem('favorites')));
            }
      }
      
        // this.props.favArr.map(
        //   obj => (
        //     (obj.src === this.props.tokenObj.src) ? isNotAddedToFavorites = !isNotAddedToFavorites : null),
        // );
      // } else {
      //   JSON.parse(localStorage.getItem('favorites')).map(
      //     obj => (
      //       (obj.src === this.props.tokenObj.src) ? isNotAddedToFavorites = !isNotAddedToFavorites : null),
      //   );
      // }
      // if (isNotAddedToFavorites) {
      //   if (localStorage.getItem('favorites') == null) {
      //     let newArr = [];
      //     newArr = this.props.favArr;
      //     newArr.push(this.props.tokenObj);
      //     localStorage.setItem('favorites', JSON.stringify(newArr));
      //     this.props.onAddFavor(newArr);
      //     console.log(JSON.parse(localStorage.getItem('favorites')));
      //   } else {
      //     let newArr = JSON.parse(localStorage.getItem('favorites'));
      //     this.props.favArr.push(this.props.tokenObj);
      //     newArr = newArr.concat(this.props.favArr);
      //     localStorage.setItem('favorites', JSON.stringify(newArr));
      //     console.log(JSON.parse(localStorage.getItem('favorites')));
      //   }
      // }
      // }
    }

    getButtonName = () => {
      let buttonName;
      let isNotAddedToFavorites = true;
      this.props.favArr.map(
        obj => (
          obj.index === this.props.tokenObj.index ? isNotAddedToFavorites = !isNotAddedToFavorites : null),
      );
      isNotAddedToFavorites ? buttonName = 'Add to favorites' : buttonName = 'Added';
      return buttonName;
    }

    render() {
      return (
        <div>
          <NavLink to="/listResult"><Button name="Back" className="btn btn-secondary" /></NavLink>
          <h2>Property Details</h2>
          <Button name="hi" className="btn btn-success" onClick={this.onClickFav} />
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


export default connect(mapStateToProps, Actions)(PropertyDetails);
