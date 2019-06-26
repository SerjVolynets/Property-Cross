const initialState = {
  valueInput: '',
  showResult: false,
  favArr: [],
};
export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'ADD':
      return {
        valueInput: actions.inputValue,
        favArr: state.favArr,
      };
    case 'AddObj':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: true,
        favArr: state.favArr,
      };
    case 'Error':
      return {
        valueInput: '',
        listings: actions.listings,
        searchLocation: actions.searchLocation,
        showResult: false,
        favArr: state.favArr,
      };
    case 'onAddTokenObj':
      return {
        valueInput: '',
        listings: state.listings,
        searchLocation: state.searchLocation,
        showResult: true,
        tokenObj: actions.tokenObj,
        favArr: state.favArr,
      };
    case 'onAddFavor':
      return {
        valueInput: '',
        listings: state.listings,
        searchLocation: state.searchLocation,
        showResult: true,
        tokenObj: state.tokenObj,
        favArr: actions.favor,
      };
    default:
      return state;
  }
}
