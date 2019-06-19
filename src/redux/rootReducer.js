const initialState = {
    valueInput: '',
    showResult: false,
    showButFav: true
}


export default function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'ADD':
            return {
                valueInput: actions.inputValue
            }
        case 'RETURN':
            return {
                valueInput: ''
            }
        case 'AddObj':
            return {
                valueInput: '',
                listings: actions.listings,
                searchLocation: actions.searchLocation,
                showResult: true
            }
        case 'Error':
            return {
                valueInput: '',
                listings: actions.listings,
                searchLocation: actions.searchLocation,
                showResult: true
            }
        case 'onAddTokenObj':
            return {
                valueInput: '',
                listings: state.listings,
                searchLocation: state.searchLocation,
                showResult: true,
                tokenObj:actions.tokenObj
            }
        default:
            return state;
    }

}