import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);