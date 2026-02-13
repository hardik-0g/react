import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ParamComp from './components/ParamComp';
import Admin from './components/Admin';
import Courses from './components/Courses';
import Notfound from './components/Notfound';

function App() {
  


  const [count, setCount] = useState(0)

  const router= createBrowserRouter(
    [
      {
        path:'*',  // use to go on that page if no url matches 
        element: <Notfound/>

      },

      {
        path:"/",
        element: <Home/>

      },
      {
        path:"/Dashboard",
        element: <Dashboard/>,
        children:[
          {
            path:'Courses',    //imp note:- here '/Courses' not to use in nested cases
            element: <Courses/>
          },
          {
            path:'Admin',
            element: <Admin/>
          }
        ]
      },
      {
        path:"/Student/:id", // 'route parameters' here what on place of id given in link is returned as id
        element: <ParamComp/>
      }
    ]
  )
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
