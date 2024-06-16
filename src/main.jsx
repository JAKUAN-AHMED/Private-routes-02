import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ProviderContext from './Components/ProviderContext/ProviderContext.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';
import Deshboard from './Components/Deshboard/Deshboard.jsx';
import Profile from './Components/Profile/Profile.jsx';
const router=createBrowserRouter([
  {
    path:'',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
      {
        path:'/deshboard',
        element:<PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>,
      },
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
    </ProviderContext>
  </React.StrictMode>
);
