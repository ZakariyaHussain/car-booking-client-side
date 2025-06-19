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
import Error from './Components/Pages/Error';
import axios from 'axios';
import Update from './Components/Update';
import CarDetails from './Components/carDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => axios('https://car-booking-server.vercel.app/cars'),
        Component: Home
      },
      {
        path: '/availableCars',
        loader: () => axios('https://car-booking-server.vercel.app/cars'),
        Component: AvailableCars
      },
      {
        path: '/addCar',
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path: '/myCars/:email',
        loader: ({params}) => axios(`https://car-booking-server.vercel.app/my-cars/${params.email}`),
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>
      },
      {
        path: '/myBookings/:email',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: "/update/:id",
        loader: ({params}) => fetch(`https://car-booking-server.vercel.app/car/${params.id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: "carDetails/:id",
        loader: ({params}) => axios(`https://car-booking-server.vercel.app/car/${params.id}`),
        Component: CarDetails,
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
