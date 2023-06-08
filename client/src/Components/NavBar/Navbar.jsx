import "./Navbar.css";
import logo from "../../Assets/Logo.png";

export default function Navbar() {
  return (
    <div className='nav'>
        <ul className="rightnav">
            <img src={logo} alt="logo"/>
            <h2>ChocoLicious</h2>
        </ul>
        <ul className="leftnav">
            <li>
                <i className="fa-solid fa-shop"></i>
                <p>Home</p>
            </li>
            <li>
                <i className="fa-solid fa-circle-info"></i>
                <p>About</p>
            </li>
            <li>
                <i className="fa-solid fa-phone"></i>
                <p>Contact</p>
            </li>
            <li>
                <i className="fa-solid fa-heart"></i>
                <p>WishList</p>
            </li>
            <li>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart</p>
            </li>
            <li>
                <i className="fa-solid fa-user"></i>
                <p>Profile</p>
            </li>
        </ul>
    </div>
  )
}
