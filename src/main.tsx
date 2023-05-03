import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

//importação 

import Home from './screens/Home'
import QuemSomos from './screens/QuemSomos'

//Rotas da aplicação

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>

  },
  {
    path:'/quemSomos',
    element: <QuemSomos/>

  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* Configuração para acessar as rotas */}
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
