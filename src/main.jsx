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
