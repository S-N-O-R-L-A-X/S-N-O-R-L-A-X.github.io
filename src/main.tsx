import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './views/Layout/Layout';

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
  Routes
} from "react-router-dom";
import Home from './views/Home/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    }, {
      path: "/home",
      element: <Home />
    }]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
