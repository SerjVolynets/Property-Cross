import * as types from '../types';

export const addToFavorite = () => ({
  type: types.ADD_FAVORITE,
  payload: '',
});

export const addInputsValue = value => ({
  type: types.ADD,
  payload: value,
});

export const removeFavorite = index => ({
  type: types.REMOVE_CURRENT_FAVORITE,
  payload: index,
});

export const deleteFavorite = () => ({
  type: types.REMOVE_FAVORITE,
  payload: '',
});

export const addValuesForTokenProperty = index => ({
  type: types.ADD_TOKEN_OBJECT,
  payload: index,
});

export const wrongCity = () => ({ type: types.WRONG_CITY, payload: 'REQUEST_ERROR' });

export const addValueForShowResult = searchLocation => ({
  type: types.ADD_NEW_OBJECT,
  payload: searchLocation,
});

// export function getRequest(stateLocation) {
//   return (dispatch) => {
//     fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`)
//       .then(response => response.json())
//       .then((data) => {
//         dispatch(onAddObj(data.response.listings, data.response.locations[0].long_title));
//       })
//       .catch(() => {
//         dispatch(onError(stateLocation));
//       });
//   };
// }

export const request = stateLocation => ({
  type: types.GET_REALTY,
  method: 'GET',
  url: `https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`,
});
