import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { HeroSection } from "./components/HeroSection/HeroSection.jsx";
import {Features} from "./components/Features/Features.jsx";
import {FutureScope} from './components/FutureScope/FutureScope.jsx';
import QueryForm from './components/QueryForm/QueryForm.jsx';
import {CardComponent} from "./components/CardComponent/CardComponent.jsx";
import {QueryListing} from "./components/CardComponent/QueryListing.jsx";

const Home=()=>(
  <div>
    <HeroSection />
    <Features />
    <FutureScope />
  </div>
)

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<Home />} />
      <Route path="/craftquery" element={<QueryForm />} />
      <Route path="/getallqueries" element={<QueryListing />} />  

    </Route>
  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
