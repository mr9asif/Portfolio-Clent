import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Components/Router.jsx'
import {
 
  RouterProvider,
} from "react-router-dom";
import AuthContext from './Components/AuthContext/AuthContex.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthContext>
 <RouterProvider router={router} />
 </AuthContext>
  </React.StrictMode>,
)
