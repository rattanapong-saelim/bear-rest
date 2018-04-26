import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore,applyMiddleware} from 'Redux';
import thunk from 'redux-trunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {fetchbar } from '.action';


const  createStorewithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStorewithMiddleware(reducers);

store.dispatch(fetchBear());
ReactDOM.render(

    <Provider store={store}>
         <App />
    </Provider>
,document.getElementById('root')
)



