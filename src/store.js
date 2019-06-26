import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
