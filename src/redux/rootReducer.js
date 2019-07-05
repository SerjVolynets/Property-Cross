import * as types from '../types';

const initialState = {
  valueInput: '',
  showResult: false,
  favoritesList: JSON.parse(localStorage.getItem('favorites')) || [],
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case types.REMOVE_CURRENT_FAVORITE: {
      const newFavorites = state.favoritesList.filter(item => item.src !== actions.payload);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return {
        ...state,
        favoritesList: newFavorites,
      };
    }
    case types.ADD_VALUE_INPUT: {
      return {
        ...state,
        valueInput: actions.payload,
      };
    }
    case types.ADD_NEW_OBJECT: {
      return {
        ...state,
        valueInput: '',
        searchLocation: actions.payload,
        showResult: true,
        checkForSearch: false,
      };
    }
    case types.GET_REALTY.FAILURE: {
      return {
        ...state,
        valueInput: '',
        showResult: false,
        error: actions.payload,
      };
    }
    case types.GET_REALTY.SUCCESS: {
      return {
        ...state,
        data: actions.payload,
        checkForSearch: true,
      };
    }
    case types.ADD_TOKEN_OBJECT: {
      const newTokenObj = {
        src: state.data.listings[actions.payload].img_url,
        price: state.data.listings[actions.payload].price,
        dis: state.data.listings[actions.payload].summary,
      };
      return {
        ...state,
        tokenObj: newTokenObj,
      };
    }
    case types.ADD_FAVORITE: {
      let isNotAddedToFavorites = true;
      const newFavorites = state.favoritesList.slice();
      if (state.favoritesList.length < 1) {
        newFavorites.push(state.tokenObj);
      } else {
        newFavorites.forEach(
          (obj) => {
            if (obj.src === state.tokenObj.src) {
              isNotAddedToFavorites = !isNotAddedToFavorites;
            }
          },
        );
        if (isNotAddedToFavorites) {
          newFavorites.push(state.tokenObj);
        }
      }
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return {
        ...state,
        favoritesList: newFavorites,
      };
    }
    case types.REMOVE_FAVORITE: {
      let workArr;
      let isTokenObjInLocalStorage = false;
      workArr = state.favoritesList;
      workArr.forEach((obj) => {
        if (obj.src === state.tokenObj.src) {
          isTokenObjInLocalStorage = !isTokenObjInLocalStorage;
        }
      });
      if (isTokenObjInLocalStorage) {
        workArr = workArr.filter(obj => obj.src !== state.tokenObj.src);
      }
      localStorage.setItem('favorites', JSON.stringify(workArr));
      return {
        ...state,
        favoritesList: workArr,
      };
    }
    case types.WRONG_CITY: {
      return {
        ...state,
        valueInput: '',
        showResult: false,
        checkForSearch: false,
        error: 'Sorry such a city does not exist',
      };
    }
    default:
      return state;
  }
}
