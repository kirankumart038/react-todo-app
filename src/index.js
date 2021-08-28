import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as AppRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AppRouter>
    <App />
  </AppRouter>,
  document.getElementById('root')
);