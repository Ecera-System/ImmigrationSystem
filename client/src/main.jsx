import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <div className='mainContainer'>
      <App />
      <Toaster position='top-center' />
    </div>
  </BrowserRouter>
  </Provider>,
)
