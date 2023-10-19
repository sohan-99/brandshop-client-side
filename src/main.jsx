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
        element: <AddProduct></AddProduct>
      },
      {
        path: '/mycart',
        element: <MyCard></MyCard>
      },
      {
        path: 'about',
        element: <About></About>
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
