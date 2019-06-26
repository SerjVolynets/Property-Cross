import store from '../store';

export const onAddFavor = arr => ({
  type: 'onAddFavor',
  favoritesList: arr,
});

export const onAddToFavorites = () => {
  let isNotAddedToFavorites = true;
  if (store.getState().favoritesList.lenght < 1) {
    const newArr = [];
    newArr.push(store.getState().tokenObj);
    store.onAddFavor(newArr);
    console.log(store.getState().favoritesList);
    localStorage.setItem('favorites', JSON.stringify(newArr));
  } else {
    store.getState().favoritesList.forEach(
      (obj) => {
        if (obj.src === store.getState().tokenObj.src) {
          isNotAddedToFavorites = !isNotAddedToFavorites;
        }
      },
    );
    if (isNotAddedToFavorites) {
      let newArr = [];
      newArr = store.getState().favoritesList;
      newArr.push(store.getState().tokenObj);
      store.dispatch(onAddFavor(newArr));
      console.log(store.getState().favoritesList);
      localStorage.setItem('favorites', JSON.stringify(newArr));
    }
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
  if (store.getState().favoritesList.lenght < 1) {
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
