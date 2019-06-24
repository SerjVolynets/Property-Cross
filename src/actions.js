export default function mapDispatchToProps(dispatch) {
  return {
    onAdd: value => dispatch({ type: 'ADD', inputValue: value }),
    onAddObj: (listings, searchLocation) => dispatch({
      type: 'AddObj',
      listings,
      searchLocation,
    }),
    onError: value => dispatch({ type: 'Error', searchLocation: `Sorry '${value}' does not exist` }),
    onAddTokenObj: tokenObj => dispatch({
      type: 'onAddTokenObj',
      tokenObj,
    }),
    onAddFavor: arr => dispatch({
      type: 'onAddFavor',
      favor: arr,
    }),
  };
}
