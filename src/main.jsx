import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/404'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="flex justify-center min-h-screen items-center font-bold text-6xl">Hello Word</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
