import store from '../store';

export const onAddFavor = arr => ({
  type: 'onAddFavor',
  favor: arr,
});


export const onDeleteFromFavorites = (someIndex) => {
  let workArr = [];
  workArr = JSON.parse(localStorage.getItem('favorites'));
  workArr = workArr.filter((arr, index) => (index !== someIndex));
  localStorage.setItem('favorites', JSON.stringify(workArr));
  store.dispatch(onAddFavor(workArr));
};
