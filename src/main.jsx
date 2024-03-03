import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Services from './pages/Services.jsx'
import Homepage from './pages/Homepage.jsx'
import Main from './Layout/Main.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'
import RecommendedProps from './pages/RecommendedProps.jsx'
import Admin from './pages/Admin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import PropertyData from './pages/PropertyData.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:'/', element:<Homepage></Homepage>},
      {path:'/details', element:<PropertyDetails></PropertyDetails>},
      {path:'/properties', element:<RecommendedProps></RecommendedProps>,
    loader:()=> fetch('http://localhost:5000/properties')},
      {path:'/admin', element:<Admin></Admin>},
      {path:'/dashboard', element:<Dashboard></Dashboard>},
      {path:'/data', element:<PropertyData></PropertyData>,
    loader: ()=> fetch('http://localhost:5000/properties')},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);