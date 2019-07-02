import * as types from '../types';

export const addFavorite = () => ({
  type: types.ADD_FAVORITE,
  payload: '',
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
  payload: '',
});

export const onAddTokenObj = index => ({
  type: types.ADD_TOKEN_OBJECT,
  payload: index,
});

export const onError = () => ({ type: types.ERROR2, payload: 'REQUEST_ERROR' });

export const onAddObj = searchLocation => ({
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
  type: 'GET_REQUEST',
  payload: {
    use: 'request',
    method: 'GET',
    url: `https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${stateLocation}`,
  },
});
