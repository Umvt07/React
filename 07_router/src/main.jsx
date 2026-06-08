import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import User from './assets/components/User/User.jsx'
import Github, { GithubInfoLoader } from './assets/components/Github/Github.jsx'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>

        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"User/:id",
          element:<User/>
          // this is the id which we want to display
        },
        {
          loader: GithubInfoLoader,
          path:"GitHub",
          element:<Github/>
        }
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
