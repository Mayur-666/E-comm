import React from 'react'
import "./Landing.css"
import page from "../../Assets/Hero_MintyMoment (1).jpg";
import wrapper from "../../Assets/wrapper1.png";

export default function Landing() {
  return (
    <>
        <div className="page">
            <img id="page" src={page}  alt="background"/>
            <img  id="wrapper" src={wrapper} alt="choco"/>
            
        </div>
    </>
  )
}
