import * as types from '../types';

export const addFavorite = () => ({
  type: types.ADD_FAVORITE,
});

export const onAdd = value => ({
  type: types.ADD,
  payload: value,
});

export const removeFavorite = index => ({
  type: types.REMOVE_CURRENT_FAVORITE,
  payload: index,
});

export const deleteFavorite = () => ({
  type: types.REMOVE_FAVORITE,
});

export const onAddTokenObj = index => ({
  type: types.ADD_TOKEN_OBJECT,
  payload: index,
});

export const onError = value => ({ type: types.ERROR, searchLocation: `Sorry '${value}' does not exist` });

export const onAddObj = (listings, searchLocation) => ({
  type: types.ADD_NEW_OBJECT,
  listings,
  searchLocation,
});

export function getRequest(stateLocation) {
  return (dispatch) => {
    fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`)
      .then(response => response.json())
      .then((data) => {
        dispatch(onAddObj(data.response.listings, data.response.locations[0].long_title));
      })
      .catch(() => {
        dispatch(onError(stateLocation));
      });
  };
}
