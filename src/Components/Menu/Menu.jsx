import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
import img from '../Menu/1709290727341.gif'
import img1 from '../Menu/coffee-shop.jpg'
import img2 from '../Menu/vegan-cafe-food-menu-design-vector-13778792.jpg'
import img3 from '../Menu/r5b0-Cafe-Purple-Non-Veg-Restaurant-menu.jpg'

const Menu = () =>{
    return(
        <>
      <div className="first">
        <img src={img} alt="" />
      </div>
      <div className="blank">
  <marquee scrollamount="20" behavior="alternate" direction="left">Welcome to Cafe Menu....
  </marquee>
  </div>
<div className="second">
    <img src={img1} alt="" />
</div>
<div className="veg">
    <h1>Vegetarian Food</h1>
    <img src={img2} alt="" />
</div>
<div className="nonveg">
    <h1>Non-Vegetarian Food</h1>
    <img src={img3} alt="" />
</div>
<div className="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13830.744770816322!2d77.51934024087846!3d29.930935145636965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e95333bbc8231%3A0x2de5e34931a9a142!2sPant%20Vihar%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1722081569425!5m2!1sen!2sin" width="800" height="600" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
       <div className="footermain">
        <hr />
        <div className="footer">
        <div className="footer1">
          <ul>
            <li><Link to='' id="footerli">Quick Links</Link></li>
            <li><Link to=''>Cafe menu</Link></li>
            <li><Link to=''>Cafe finder</Link></li>
            <li><Link to=''>Customer Cafe</Link></li>
          </ul>
        </div>
        <div className="footer5">
        <ul>
            <li><Link to='' id="footerli">About Us</Link></li>
            <li><Link to=''>Awards</Link></li>
            <li><Link to=''>Business</Link></li>
            <li><Link to=''>Governance</Link></li>
            <li><Link to=''>Bean to Cup</Link></li>
            <li><Link to=''>News & Events</Link></li>
            <li><Link to=''>Careers</Link></li>
            <li><Link to=''>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer4">
        <ul>
            <li><Link to='' id="footerli">Contact Us</Link></li>
            <li><Link to=''>divyansh494@gmail.com</Link></li>
            <li><Link to=''>7535045913</Link></li>
          </ul>
        </div>
        <div className="footer2">
        <li>@ Pant Vihar Near ITC Company <br /> Saharanpur <br /> Uttar Pradesh 247001</li>
        </div>

        </div>
        <hr />
        <h1>© Cafe Coffee Day. All rights reserved.</h1>
        </div>

        </>
    )
}

export default Menu