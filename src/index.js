import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Redux/store/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
