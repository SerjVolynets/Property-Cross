import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../redux/rootReducer';
import middlewareForRequest from '../middlewares';

const store = createStore(rootReducer, applyMiddleware(logger, middlewareForRequest));
export default store;
