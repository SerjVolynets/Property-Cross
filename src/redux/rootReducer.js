const initialState = {
    valueInput: '',
    showResult: false
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
                showResult: true,
                check: 'there'
            }
        case 'Error':
            return {
                valueInput: '',
                listings: actions.listings,
                searchLocation: actions.searchLocation,
                showResult: true
            }
        default:
            return state;
    }

}