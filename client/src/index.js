import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import truckReducer  from './store/reducers/truckReducer';


const rootReducer = combineReducers( {
    trucks: truckReducer
} );

const store = createStore(
    rootReducer,
    applyMiddleware( thunk, logger )
);


ReactDOM.render(
    <Provider store={ store } >
        <BrowserRouter>
            <App store={ store }/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));