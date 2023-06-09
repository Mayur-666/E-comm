import React from 'react';
import Landing from './Components/Pages/landingPage/Landing';
// import Navbar from './Components/NavBar/Navbar';

import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './Components/Pages/homePage/Home';
import Login from './Components/Pages/loginPage/Login';
//import ProductEntry from './Components/Product_entry/ProductEntry';


export default function App() {
  // const user = false;
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element= {<Landing />} />
        <Route exact path="/shop" element= {<Home />} />
        <Route exact path="/login" element= {<Login />} />
        {/* <Route exact path="/" element= {<Landing />} /> */}
        {/* <Landing />  */}
        {/* <ProductEntry /> */}
      </Routes>
    </Router>
  )
}
