import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import React from 'react';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AddProduct from './components/AddProduct/AddProduct';
import MyCard from './components/MyCard/MyCard';
import About from './components/About/About';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute';

import Products from './components/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path: '/addproducts',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
      },
      {
        path: '/mycart',
        element:<PrivateRoute><MyCard></MyCard></PrivateRoute> 
      },
      {
        path: 'about',
        element:<PrivateRoute><About></About>
      </PrivateRoute> 
      },
      {
        path: '/:brand_name',
        element:<PrivateRoute><Products></Products></PrivateRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer />
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
