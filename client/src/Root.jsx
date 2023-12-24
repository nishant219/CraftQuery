import React from 'react'
import { Outlet } from 'react-router-dom'; // Outlet is a special component that acts as a placeholder for the child routes of a parent route. //things in the outlet will be rendered/changes in the parent component
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function Root() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root