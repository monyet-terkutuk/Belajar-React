import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/404'
import ProductsPage from './Pages/products'
import TestPage from './Pages/test'
import ProfilePage from './Pages/profile'
import DetailProductPage from './Pages/detailProduct'
import { Provider } from 'react-redux';
import store from './redux/store';
import DarkModeContextProvider from './context/DarkMode'


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
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
