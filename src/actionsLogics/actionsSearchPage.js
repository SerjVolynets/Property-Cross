import store from '../store';

export const onAddObj = (listings, searchLocation) => ({
  type: 'AddObj',
  listings,
  searchLocation,
});

export const onError = value => ({ type: 'Error', searchLocation: `Sorry '${value}' does not exist` });

export const onAdd = value => ({ type: 'ADD', inputValue: value });

const seenRequest = () => {
  const location = store.getState().valueInput;
  fetch(`https://api.nestoria.co.uk/api?encoding=json&foo=bar&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=`+location)
    .then(response => response.json())
    .then((data) => {
      store.dispatch(onAddObj(data.response.listings, data.response.locations[0].long_title));
    })
    .catch(() => {
      store.dispatch(onError(location));
    });
};

export const buttonClick = (event) => {
  event.preventDefault();
  if (!store.getState().valueInput.length) {
    return;
  }
  seenRequest();
};
