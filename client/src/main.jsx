// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home.jsx';
import MyDiets from './pages/MyDiets.jsx';
import GenerateDiet from './pages/GenerateDiet.jsx';
import GenerateWorkout from './pages/generateWorkout.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const routers = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'/myDiets',
      element:<MyDiets/>
    },
    {
      path:'/generateDiet',
      element:<GenerateDiet/>
    },
    {
      path:'/generateWorkout',
      element:<GenerateWorkout/>
    },

    
  ]}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={routers}/>
  // </React.StrictMode>,
)
