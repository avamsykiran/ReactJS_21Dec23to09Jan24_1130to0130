import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import friendsReducer from './state/friendsReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const friendsStore = createStore(friendsReducer);

root.render(
  <React.StrictMode>
    <Provider store={friendsStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
