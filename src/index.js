import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from './components/home'
import {News} from './components/news'
import {Enterprise} from './components/enterprise'
import { Products } from './components/products';
import {Map} from './components/map'
import {Info} from './components/info'
import { ErrorPage } from './components/ErrorPage';
import { Contact } from './components/contact';
import { NewsText } from './components/newsText';
import {Provider} from 'react-redux'
import {store} from './redux/store'

const router = createBrowserRouter([{
  path: "/",
  element: <Home/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/",
      element: <Info/>
    },
    {
      path: "/news",
      element: <News/>,
    },
    {
      path: "/enterprise",
      element: <Enterprise/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/map",
      element: <Map/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }, 
    {
      path: "/newsText",
      element: <NewsText/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
