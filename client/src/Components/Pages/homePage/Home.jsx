import React from 'react';
import "./Home.css";
// import back from "../../../Assets/homeback1.png"
import NavBar1 from "../../Navbar1/NavBar1"
// import pic from "../../../Assets/wrapper1.png";
import ots from "../../../Assets/homeback2.jpg"

export default function Home() {
  return (
    <>
      <NavBar1 />
        
        <div className="home">
            {/* <img id="topimg" src={back} alt="homeback" /> */}
            <img id="fullimg" src={ots} alt="homeback" />
              <h1>MORE THAN <br />JUST CHOCOLATES !!!</h1>
            {/* <div className="wrap">
              <img id="img1" src={pic} alt="chocolate" />
            </div> */}
            {/* <img id="bottomimg" src={back} alt="homeback" /> */}
        </div> 

        
    </>
  )
}
