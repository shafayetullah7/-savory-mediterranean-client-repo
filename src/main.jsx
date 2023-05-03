import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/erroPage/ErrorPage.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/access/Login.jsx'
import Blog from './components/blog/Blog.jsx'
import Register from './components/access/Register.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import { fetchChefAndRecipes, fetchChefs } from './fetcher/fetcher.js'
import Recipes from './components/chefAndRecipes/Recipes.jsx'
import ChefRecipes from './components/chefAndRecipes/ChefRecipes.jsx'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:fetchChefs
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chefs/:id',
        element:<ChefRecipes></ChefRecipes>,
        loader:fetchChefAndRecipes
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
