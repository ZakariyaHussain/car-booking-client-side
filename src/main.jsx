import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import AuthProvider from './Contexts/AuthProvider';
import MainLayout from './Layouts/MainLayout';
import AvailableCars from './Components/Pages/AvailableCars';
import PrivateRoute from './Routes/PrivateRoute';
import AddCar from './Components/Pages/AddCar';
import MyCars from './Components/Pages/MyCars';
import MyBookings from './Components/Pages/MyBookings';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/availableCars',
        Component: AvailableCars
      },
      {
        path: '/addCar',
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path: '/myCars',
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>
      },
      {
        path: '/myBookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
