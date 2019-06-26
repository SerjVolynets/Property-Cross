const initialState = {
  valueInput: '',
  showResult: false,
  favoritesList: [],
};
export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'ADD':
      return {
        valueInput: actions.inputValue,
        favoritesList: state.favoritesList,
      };
    case 'AddObj':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: true,
        favoritesList: state.favoritesList,
      };
    case 'Error':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: false,
      };
    case 'onAddTokenObj':
      return {
        valueInput: '',
        listings: state.listings,
        searchLocation: state.searchLocation,
        showResult: true,
        tokenObj: actions.tokenObj,
        favoritesList: state.favoritesList,
      };
    case 'onAddFavor':
      return Object.assign({}, state, {
        favoritesList: actions.favoritesList,
      });
    default:
      return state;
  }
}
