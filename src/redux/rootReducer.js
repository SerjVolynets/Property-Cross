const initialState = {
  valueInput: '',
  showResult: false,
  favoritesList: [],
  test: true,
};
export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'ADD':
      return {
        valueInput: actions.inputValue,
      };
    case 'AddObj':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: true,
        favoritesList: state.favoritesList,
        test: true,
      };
    case 'Error':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: false,
        favoritesList: state.favoritesList,
        test: true,
      };
    case 'onAddTokenObj':
      return {
        valueInput: '',
        listings: state.listings,
        searchLocation: state.searchLocation,
        showResult: true,
        tokenObj: actions.tokenObj,
        favoritesList: state.favoritesList,
        test: true,
      };
    case 'onAddFavor':
      return {
        valueInput: '',
        listings: state.listings,
        searchLocation: state.searchLocation,
        tokenObj: state.tokenObj,
        showResult: true,
        favoritesList: actions.favoritesList,

      };
    default:
      return state;
  }
}
