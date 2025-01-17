import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, compose} from 'redux'
import { rootReducer } from './redux/reducers/rootReducer'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker'


const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
//test dispatch example



const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


