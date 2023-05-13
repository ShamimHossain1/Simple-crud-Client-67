import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/404 Page/Error';
// import Users from './Components/users/users';
import User from './Components/users/User';
import Update from './Components/users/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/users",
    element:<User></User>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: "/update/:id",
    element:<Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
