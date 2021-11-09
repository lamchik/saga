import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga'
import App from './App';
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import {sagaWatcher} from "./redux/sagas";
const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose (
  applyMiddleware(
    thunk, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
