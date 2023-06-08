import React from 'react';
import Landing from './Components/landingPage/Landing';
import Navbar from './Components/NavBar/Navbar';
// import Home from './Components/homePage/Home';
import ProductEntry from './Components/Product_entry/ProductEntry';


export default function App() {
  return (
    <>
      <Navbar />
      <Landing /> 
      {/* <Home />   */}
      <ProductEntry />
    </>
  )
}
