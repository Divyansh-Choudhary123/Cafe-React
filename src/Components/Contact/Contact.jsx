import React from "react";
import { Link } from "react-router-dom";
import './Contact.css'
import img from '../Contact/fiest.jpg'
import img1 from '../Contact/contact.jpg'


const Contact = ()  =>{
    return(
<>
        <div className="first">
            <img src={img} alt="" />
        </div>
        <div className="blank">
  <marquee scrollamount="20" behavior="alternate" direction="left">Contact Us and Get more details...
  </marquee>
</div>
        <div className="contact">
            <img src={img1} alt="" />
            <div className="form">
            <h2>Contact Us</h2>
                <input type="text" placeholder="ENTER YOUR NAME*" id="input"/><br /><br />
                <input type="text" placeholder="ENTER YOUR PHONE-NO*"/><br /><br />
                <input type="text" placeholder="MASSAGE*" id="input1"/><br />
                <button><a href="">SUBMIT</a></button>
            </div>
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

export default Contact