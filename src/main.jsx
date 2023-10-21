import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import React from 'react';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AddProduct from './components/AddProduct/AddProduct';
import MyCard from './components/MyCard/MyCard';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute';

import Products from './components/Products/Products';
import Update from './components/AddProduct/Update';
import Details from './components/AddProduct/Details';

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/addproducts',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCard></MyCard></PrivateRoute>,
        loader: () => fetch('https://divicedazzle-server-9cpnygp4i-sohan75632.vercel.app/mycart')
      },
      {
        path: '/:brand_name',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://divicedazzle-server-9cpnygp4i-sohan75632.vercel.app/products/${params.brand_name}`)
      },
      {
        path: '/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://divicedazzle-server-9cpnygp4i-sohan75632.vercel.app/update/${params.id}`)
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://divicedazzle-server-9cpnygp4i-sohan75632.vercel.app/update/${params.id}`)
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
