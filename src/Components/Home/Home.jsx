import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import img1 from '../Home/1.jpg'
import img2 from '../Home/2.jpg'
import img3 from '../Home/3.jpg'
import img4 from '../Home/4.jpg'
import img5 from '../Home/5.jpg'
import card1 from '../Home/0.gif'
import card2 from '../Home/01.gif'
import card3 from '../Home/abc.gif'

const Home = () =>{
   return(
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
<div className="blank">
  <marquee scrollamount="20" behavior="alternate" direction="left">Welcome to Our Cafe....
  </marquee>
</div>
        <div className="Card">
          <div className="card1">
            <img src={card1} alt="" />
            <button><Link to="Menu" id="btn">WHAT'S NEW</Link></button>
            </div>
           <div className="card2">
            <img src={card2} alt="" />
            <button><Link to="Online" id="btn">FIND A CAFE NEAR YOU</Link></button>
            </div> 
          <div className="card3">
            <img src={card3} alt="" />
            <button><Link to="Contact" id="btn">SHOP NOW</Link></button>
            </div> 
        </div>
        <div className="banar">
     <div className="banar1">
  <button><Link to="" id="btn1">READ OUR STORY</Link></button>
</div>
        </div>
        <div className="icons">
          <div className="iconclass"> 
            <i class="fa-brands fa-instagram" id="insta"></i>
            </div>
          <div className="iconclass1"> 
          <i class="fa-brands fa-facebook"></i>
            </div>
          <div className="iconclass2"> 
          <i class="fa-brands fa-youtube"></i>
            </div>
          <div className="iconclass3"> 
          <i class="fa-brands fa-twitter"></i>
            </div>
          <div className="iconclass4"> 
          <i class="fa-brands fa-linkedin"></i>
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


export default Home