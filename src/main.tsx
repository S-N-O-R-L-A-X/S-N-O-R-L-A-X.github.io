import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Layout from './views/Layout/Layout';

import {
  createBrowserRouter,
  createHashRouter,
  Route,
  RouterProvider,
  Navigate,
  Router,
  Routes,
} from "react-router-dom";
import Home from './views/Home/Home';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    }, {
      path: "/home",
      element: <Navigate to="/"></Navigate>
    }]
  },
], { basename: import.meta.env.PUBLIC_URL });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
