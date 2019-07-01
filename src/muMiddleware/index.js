import { onAddObj, onError } from '../actions/index';

const thunk2 = () => next => (action) => {
  console.log('dispatching', action.url);
  if (action.url == undefined) {
    const result = next(action);
    return result;
  }
  fetch(action.url)
    .then(response => response.json())
    .then((data) => {
      return next(onAddObj(data.response.listings, data.response.locations[0].long_title));
    })
    .catch(() => {
      return next(onError(action.loc));
    });
};

export default thunk2;
