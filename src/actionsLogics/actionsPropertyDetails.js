import store from '../store';

// export const onAddFavor = arr => {
//   return {
//   type: 'onAddFavor',
//   favoritesList: arr,
// }
// };
// {
//   valueInput: '',
//   listings: state.listings,
//   searchLocation: state.searchLocation,
//   tokenObj: state.tokenObj,
//   showResult: true,
//   favoritesList: actions.favoritesList,
// };
export const onAddFavor = arr => ({
  type: 'onAddFavor',
  favoritesList: arr,
});

export const onAddToFavorites = () => {
  let isNotAddedToFavorites = true;
  if (JSON.parse(localStorage.getItem('favorites') == [])) {
    let newArr = [];
    newArr = store.getState().favoritesList;
    newArr.push(store.getState().tokenObj);
    console.log(store.getState().favoritesList);
    localStorage.setItem('favorites', JSON.stringify(newArr));
    store.dispatch(onAddFavor(newArr));
  } else {
    store.getState().favoritesList.forEach(
      (obj) => {
        if (obj.src === store.getState().tokenObj.src) {
          isNotAddedToFavorites = !isNotAddedToFavorites;
        }
      },
    );
  }
  if (isNotAddedToFavorites) {
    let newArr2 = [];
    newArr2 = store.getState().favoritesList;
    newArr2.push(store.getState().tokenObj);
    store.dispatch(onAddFavor(newArr2));
    console.log(store.getState().favoritesList);
    localStorage.setItem('favorites', JSON.stringify(newArr2));
  }
};

export const onDeleteFavorites = () => {
  let workArr = [];
  let isTokenObjInLocalStorage = false;
  workArr = store.getState().favoritesList;
  workArr.forEach((obj) => {
    if (obj.src === store.getState().tokenObj.src) {
      isTokenObjInLocalStorage = !isTokenObjInLocalStorage;
    }
    return isTokenObjInLocalStorage;
  });
  if (isTokenObjInLocalStorage) {
    workArr = workArr.filter((obj) => {
      if (obj.src !== store.getState().tokenObj.src) {
        return true;
      }
      return false;
    });
    store.dispatch(onAddFavor(workArr));
    localStorage.setItem('favorites', JSON.stringify(workArr));
  }

  console.log(store.getState().favoritesList);

};

export const onChangeButton = () => {
  let isAdded = false;
  console.log(store.getState().favoritesList);
  if (JSON.parse(localStorage.getItem('favorites') == [])) {
    isAdded = false;
  }
  else {
    store.getState().favoritesList.forEach((obj) => {
      if (obj.src === store.getState().tokenObj.src) {
        isAdded = !isAdded;
      }
    });
  }
  return isAdded;
};
