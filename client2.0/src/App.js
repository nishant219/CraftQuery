import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import { HeroSection } from "./components/HeroSection/HeroSection.jsx";
import {Features} from "./components/Features/Features.jsx";
import {FutureScope} from './components/FutureScope/FutureScope.jsx';
import QueryForm from './components/QueryForm/QueryForm.jsx';
import {CardComponent} from "./components/CardComponent/CardComponent.jsx";
import {QueryListing} from "./components/CardComponent/QueryListing.jsx";

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

const Home=()=>(
  <div>
    <HeroSection />
    <Features />
    <FutureScope />
  </div>
)


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/craftquery" element={<QueryForm/>} />
            <Route path="/getallqueries" element={<QueryListing/>} />
            <Route path="/card" element={<CardComponent/>} />
          </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
