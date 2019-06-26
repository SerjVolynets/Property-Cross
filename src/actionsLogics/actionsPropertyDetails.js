import store from '../store';

export const onAddFavor = arr => ({
  type: 'onAddFavor',
  favor: arr,
});

export const onAddToFavorites = () => {
  let isNotAddedToFavorites = true;
  if (localStorage.getItem('favorites') === null) {
    const newArr = [];
    newArr.push(store.getState().tokenObj);
    localStorage.setItem('favorites', JSON.stringify(newArr));
  } else {
    JSON.parse(localStorage.getItem('favorites')).forEach(
      (obj) => {
        if (obj.src === store.getState().tokenObj.src) {
          isNotAddedToFavorites = !isNotAddedToFavorites;
        }
      },
    );
    if (isNotAddedToFavorites) {
      let newArr = [];
      newArr = JSON.parse(localStorage.getItem('favorites'));
      newArr.push(store.getState().tokenObj);
      localStorage.setItem('favorites', JSON.stringify(newArr));
      store.dispatch(onAddFavor(newArr));
    }
    
  }
  
};

export const onDeleteFavorites = () => {
  let workArr = [];
  let isTokenObjInLocalStorage = false;
  workArr = JSON.parse(localStorage.getItem('favorites'));
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
  }
  localStorage.setItem('favorites', JSON.stringify(workArr));
  store.dispatch(onAddFavor(workArr));
};

export const onChangeButton = () => {
  let isAdded = false;
  if (localStorage.getItem('favorites') == null) {
    isAdded = false;
  }
  else {
    JSON.parse(localStorage.getItem('favorites')).forEach((obj) => {
      if (obj.src === store.getState().tokenObj.src) {
        isAdded = !isAdded;
      }
    });
  } 
  return isAdded;
};
