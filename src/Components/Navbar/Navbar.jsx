import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../Navbar/logo.jpg'


const Navbar = () =>{
    return(
        <>
        <div className="navbar">
            <ul ref={Navbar}>
                <li id="logo"><img src={logo} alt="" id="img" /></li>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="Menu">Cafe Menu</Link>
                </li>
                <li>
                <Link to="Online">Order Online</Link>
                </li>
                <li>
                <Link to="Contact">Contact Us</Link>
                </li>
                <li id="li2">
                <i class="fa-solid fa-magnifying-glass"></i>
                </li> 
               

            </ul>
        
        </div>
        </>
    )
}

export default Navbar