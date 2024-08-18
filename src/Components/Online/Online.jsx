import React from "react";
import { Link } from "react-router-dom";
import './Online.css'
import img1 from '../Online/fiest.jpg'
import img2 from '../Online/cafe.jpg'
import img3 from '../Online/scanner.jpg'
import img4 from '../Online/bg.jpg'

const Online = () =>{
    return(
        <>
        <div className="img">
            <img src={img1} alt="" />
        </div>
        <div className="blank">
  <marquee scrollamount="20" behavior="alternate" direction="left">Order Online....
  </marquee>
</div>
       <div className="oder_online">
        <div className="scanner_first">
            <img src={img2} alt="" />
            <div className="scanner">
                <img src={img3} alt="" />
                <h1>^Payment</h1>
            </div>
        </div>
        <div className="scanner_second">
            <input type="text" placeholder="ENTER YOUR NAME*" id="input"/><br /><br /><br /><br />
            <input type="email" placeholder="ENTER YOUR EMAIL*" /><br /><br /><br /><br />
            <input type="text" placeholder="ENTER YOUR ADDRESS*" /><br /><br /><br /><br />
            <input type="text" placeholder="ENTER YOUR DISH*" /><br /><br /><br /><br />
            <input type="integer" placeholder="ENTER YOUR PHONE-NO*" />
            <button><a href="">SUBMIT</a></button>
        </div>
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

export default  Online