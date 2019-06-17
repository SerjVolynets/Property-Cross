const initialState = {
    valueInput: '',
    showResult: false
}


export default function rootReducer(state = initialState, actions) {
    switch (actions.type) {
        case 'ADD':
            return {
                valueInput: event.target.value;
            }
        case 'RETURN':
            return state;
        default:
            return state;
    }
    return state;

}