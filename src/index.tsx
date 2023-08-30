import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './reset.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);
