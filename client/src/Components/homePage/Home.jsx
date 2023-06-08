import React from 'react';
import "./Home.css";
import back from "../../Assets/homeback.jpg"
import NavBar1 from '../Navbar1/NavBar1';

export default function Home() {
  return (
    <>
        <NavBar1 />
        <div className="home">
            <img src={back} alt="homeback" />
            <h1>MORE THAN JUST CHOCOLATES !!!</h1>
        </div> 
    </>
  )
}
