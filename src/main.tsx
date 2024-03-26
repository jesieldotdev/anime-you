import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import {ViewPage} from "./pages/View/index.tsx"
import {AppBar} from "./components/Appbar/index.tsx"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/:id",
    element: <ViewPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
