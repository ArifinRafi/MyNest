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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:'/', element:<Homepage></Homepage>},
      {path:'/details', element:<PropertyDetails></PropertyDetails>},
      {path:'/properties', element:<RecommendedProps></RecommendedProps>},
      {path:'/admin', element:<Admin></Admin>},
      {path:'/dashboard', element:<Dashboard></Dashboard>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);